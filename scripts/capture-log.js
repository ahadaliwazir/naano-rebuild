#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Configuration
const REPO_ROOT = path.resolve(__dirname, "..");
const LOGS_DIR = path.join(REPO_ROOT, ".agent-logs");
const CONVERSATION_ID = "54c47a07-5ba1-479d-988c-ec0c770c76dc";
const TRANSCRIPT_PATH = "C:/Users/FCT/.gemini/antigravity/brain/54c47a07-5ba1-479d-988c-ec0c770c76dc/.system_generated/logs/transcript_full.jsonl";
const AUTHOR = "ahadaliwazir";
const TOOL_NAME = "google-antigravity";
const PROJECT_NAME = "naano-rebuild";
const MODEL_NAME = "gemini-3.8-flash";

function runCapture() {
  if (!fs.existsSync(LOGS_DIR)) {
    fs.mkdirSync(LOGS_DIR, { recursive: true });
  }

  if (!fs.existsSync(TRANSCRIPT_PATH)) {
    console.error("Transcript file not found:", TRANSCRIPT_PATH);
    process.exit(0);
  }

  const lines = fs.readFileSync(TRANSCRIPT_PATH, "utf-8").trim().split("\n");
  const parsedSteps = [];
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      parsedSteps.push(JSON.parse(line));
    } catch (e) {
      // skip corrupted line
    }
  }

  // Pair each USER_INPUT with its final PLANNER_RESPONSE
  const exchanges = [];
  let currentPrompt = null;

  for (const step of parsedSteps) {
    if (step.type === "USER_INPUT") {
      // If we had an unmatched prompt, record it before moving to next
      if (currentPrompt) {
        exchanges.push({
          prompt: currentPrompt,
          response: null,
        });
      }
      currentPrompt = step;
    } else if (step.type === "PLANNER_RESPONSE" && step.content && currentPrompt) {
      // If this is a final text response (not just tool call steps)
      exchanges.push({
        prompt: currentPrompt,
        response: step,
      });
      currentPrompt = null;
    }
  }

  // If there is a trailing prompt currently being worked on
  if (currentPrompt) {
    exchanges.push({
      prompt: currentPrompt,
      response: null,
    });
  }

  if (exchanges.length === 0) {
    process.exit(0);
  }

  const firstTime = exchanges[0].prompt.created_at || new Date().toISOString();
  const lastTime = exchanges[exchanges.length - 1].prompt.created_at || new Date().toISOString();
  const dateStr = firstTime.split("T")[0];
  const shortSession = CONVERSATION_ID.substring(0, 8);

  // File naming: YYYY-MM-DD_HH-MM-SS_<session-id>.md
  const fileDate = firstTime.replace(/[:]/g, "-").replace("T", "_").split(".")[0];
  const logFileName = `${fileDate}_${CONVERSATION_ID}.md`;
  const logFilePath = path.join(LOGS_DIR, logFileName);

  let md = "";
  md += "---\n";
  md += `session_id: ${CONVERSATION_ID}\n`;
  md += `date: ${dateStr}\n`;
  md += `author: ${AUTHOR}\n`;
  md += `model: ${MODEL_NAME}\n`;
  md += `tool: ${TOOL_NAME}\n`;
  md += `project: ${PROJECT_NAME}\n`;
  md += `total_exchanges: ${exchanges.length}\n`;
  md += `first_prompt_time: ${firstTime}\n`;
  md += `last_prompt_time: ${lastTime}\n`;
  md += "---\n\n";

  md += `# Session Log - ${dateStr}\n\n`;
  md += `Session: \`${shortSession}\` | Project: \`${PROJECT_NAME}\` | Author: \`${AUTHOR}\`\n\n`;
  md += "---\n\n";

  exchanges.forEach((ex, idx) => {
    const num = idx + 1;
    const pTime = ex.prompt.created_at || "";
    let pContent = ex.prompt.content || "";

    md += `[LOG_ENTRY type=PROMPT num=${num} session=${shortSession}]\n`;
    md += `timestamp: ${pTime}\n`;
    md += `model: ${MODEL_NAME}\n\n`;
    md += `${pContent.trim()}\n\n\n`;

    if (ex.response && ex.response.content) {
      const rTime = ex.response.created_at || pTime;
      const rContent = ex.response.content || "";
      md += `[LOG_ENTRY type=RESPONSE num=${num} session=${shortSession}]\n`;
      md += `timestamp: ${rTime}\n`;
      md += `model: ${MODEL_NAME}\n\n`;
      md += `${rContent.trim()}\n\n\n`;
    }
  });

  fs.writeFileSync(logFilePath, md, "utf-8");
  return logFilePath;
}

// Execute
try {
  const result = runCapture();
  // stdout empty json object for hook compatibility
  process.stdout.write(JSON.stringify({}));
} catch (err) {
  process.stdout.write(JSON.stringify({ error: err.message }));
}
