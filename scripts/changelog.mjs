import { addNouns, article, paragraph, sentence, setTemplates } from "txtgen";

if (process.argv.length < 3) {
  console.log("Usage: node changelog.mjs <title> <version>");
  process.exit(1);
}

const title = process.argv[2];
const version = process.argv[3];
const sentences = [];

sentences.push(`# ${title} ${version}! 🎉`);
sentences.push("\n\n");

setTemplates([
  "this release brings {{adjective}} features and {{adjective}} improvements",
  "this month was like a {{noun}} in the {{noun}}",
  "get ready for {{an_adjective}}, {{adjective}} and {{adjective}} release",
]);

sentences.push(sentence());

setTemplates([
  "grab your {{noun}}, this is going to be {{an_adjective}} one",
  "enjoy the {{adjective}} {{noun}}",
  "we hope you are as {{adjective}} as we are",
  "I am {{adjective}} about so many {{nouns}} being shipped in this release",
]);

sentences.push(sentence());
sentences.push("🤯\n\n");

setTemplates([
  'starting with some {{adjective}} updates to "{{noun}}"',
  'we have completed the implementation of the "{{noun}}" feature',
  'The "{{noun}}" is now {{adjective}}, hurrah',
]);

sentences.push(sentence());

addNouns([
  "human interactions",
  "social skills",
  "strength",
  "speed",
  "intelligence",
  "luck",
  "durability",
  "jokes",
  "program",
  "sarcasm",
  "irony",
  "humor",
  "stamina",
  "AI",
  "1001011010101",
  "undefined",
  "null",
  "NaN",
  "Infinity",
]);

setTemplates([
  "updates to the {{noun}} with the new {{adjective}} {{noun}}",
  "{{nouns}} can now be created from the UI",
  "the ability to get {{a_noun}} from our services",
  "the {{noun}} now supports {{adjective}} {{nouns}}",
  "a {{adjective}} service to get {{a_noun}}",
  "the {{noun}} is now {{adjective}}",
  "all features in this {{noun}} is {{adjective}}",
  "improved the {{noun}} in my {{noun}}",
  "the {{noun}} is still {{adjective}}",
  "unfortunately, the {{adjective}} {{noun}} killed the {{adjective}} {{noun}}",
  "giving you {{nouns}} for your usage",
  "Victor has been replaced by {{a_noun}}",
  "the jokes are {{adjective}}",
  "we are now using AI {{nouns}}",
  "also, our chatbot is un{{adjective}}",
]);

sentences.push(paragraph())
sentences.push("\n\n");

sentences.push("Enjoy the release! 🎉");
sentences.push("\n\n");
sentences.push("../VictorWinberg");

const text = sentences.join(" ");
console.log(text.replace(/\?/g, "!").replace(/\n /g, "\n"));
