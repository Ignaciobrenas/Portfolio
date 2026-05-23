const fs = require('fs');
const es = JSON.parse(fs.readFileSync('./dictionaries/es.json', 'utf8'));

const langs = ['fr', 'de', 'ca'];
for (const lang of langs) {
  const dict = JSON.parse(fs.readFileSync(`./dictionaries/${lang}.json`, 'utf8'));
  dict.skills = es.skills;
  dict.certifications = es.certifications;
  dict.projects = es.projects;
  dict.stats = es.stats;
  dict.footer = es.footer;
  fs.writeFileSync(`./dictionaries/${lang}.json`, JSON.stringify(dict, null, 2));
}
console.log('Dictionaries synced');
