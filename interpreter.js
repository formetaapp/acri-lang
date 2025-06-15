function runACRI(code) {
  const lines = code.trim().split("\n");
  lines.forEach(line => {
    if (line.startsWith("display(")) {
      const msg = line.match(/display\("(.*)"\)/)[1];
      console.log("🖥️ DISPLAY: " + msg);
    } else if (line.startsWith("chat(")) {
      const prompt = line.match(/chat\("(.*)"\)/)[1];
      console.log("🤖 AI says: (pretend GPT) Reply to: " + prompt);
    } else if (line.startsWith("image(")) {
      const img = line.match(/image\("(.*)"\)/)[1];
      console.log("🖼️ Image Prompt: " + img);
    } else if (line.startsWith("translate(")) {
      const [text, to] = line.match(/translate\("(.*)", to="(.*)"\)/).slice(1);
      console.log(`🌍 Translate "${text}" to ${to}...`);
    } else {
      console.log("Unknown command: " + line);
    }
  });
}

// Simulate loading from file
const fs = require('fs');
const code = fs.readFileSync('./sample.acri', 'utf-8');
runACRI(code);
