const API_URL = "https://api.plos.org/search?q=title:DNA";
let docs = [];

// There is the function to get data.
async function getData() {
  return await fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      docs = json.response.docs;
    });
}

async function get() {
  await getData();
  console.log("Arrays:", docs);

  // Solving Functions
  await articleType("Research Article");
  await newAuthor(6.0);
  await newRecord("10.1371/journal.pgen.1006605");
  await uniqueArticleTypes();
  await concatenatesJournal();
  await removeData("publication_date");
  await idRange();
  await newArrays();
  await oddPositionsArray();
  await sortArrays(oddArrays, "id");
}

/* Point # 1: Develop a function that prints by console the data filtering by "article_type" and get all
  the data that are different from "Research Article". 
  Extra points, receive the value to filter by parameters. */
async function articleType(value) {
  let ArticleType = docs.filter((item) => item.article_type != value);
  console.log(`#1:`, ArticleType);
}

/* Point # 2: Develop a function that prints by console all "author_display" with "score" greater
  than "6.0".
  Extra point, receive the value to be filtered by parameters. */
async function newAuthor(score) {
  let dataNewAuthor = docs.filter((item) => item.score > score);
  console.log(`#2 Score > ${score}:`, dataNewAuthor);
}

/* Point # 3: Develop a function that gets the record with id "10.1371/journal.pgen.1006605"
  update "article_type" to "Newspaper" and print this by console. */
async function newRecord(idParameter) {
  let newRecord = docs.find((item) => item.id == idParameter);
  newRecord.article_type = "Newspaper";
  console.log(`#3 article_type Uptaded`, newRecord);
}

/* Point # 4: Develop a function that gets all the "article_type" without repeating and print it by
  console. */
async function uniqueArticleTypes() {
  let filterByArticles = docs.map((item) => item.article_type);
  let uniquesArticles = Array.from(new Set(filterByArticles));
  console.log(`#4:`, uniquesArticles);
}

/* Point # 5: Develop a function that concatenates all the "journal" and prints them by console.
  Extra point, print all the "journal" without repeating. */
async function concatenatesJournal() {
  let filterByJournal = docs.map((item) => item.journal);
  let newJournals = Array.from(new Set(filterByJournal));
  console.log(`#5:`, filterByJournal);
  console.log(`#5 ExtraPoints:`, newJournals);
}

/* Point # 6: Develop a function that removes a property of the array "docs" and prints the new
  array by console.
  Extra point, receive the property to be removed by parameter. */
async function removeData(removeData) {
  docs.map((item) => {
    delete item[removeData];
  });
  console.log(`#6 Data to delete: ${removeData}`, docs);
}

/* Point # 7: Develop a function that prints by console only the records from id
  "10.1371/journal.pone.0047101" to "10.1371/journal.pgen.1000047". */
async function idRange() {
  let firstRangeIndex = docs.findIndex(
    (item) => item.id == "10.1371/journal.pone.0047101" // uso "==" ya que estoy comparando 2 strings, el resultado va ser igual == que con ===
  );
  let lastRangeIndex = docs.findIndex(
    (item) => item.id == "10.1371/journal.pgen.1000047" // uso "==" ya que estoy comparando 2 strings, el resultado va ser igual == que con ===
  );
  let filteredData = docs.slice(firstRangeIndex, lastRangeIndex + 1);
  console.log(`#7 Filtered Data:`, filteredData);
}

/* Point # 8: Develop a function that creates an array from the given "docs" and add the following
  array to it and print it to the console. */
let arrayToAdd = [
  {
    id: "10.1371/journal.pone.0177149",
    journal: "Wall Street",
    eissn: "1932-6203",
    publication_date: "2017-05-03T00:00:00Z",
    article_type: "Newspaper",
    author_display: [
      "Irina Bruck",
      "Nalini Dhingra",
      "Matthew P. Martinez",
      "Daniel L. Kaplan",
    ],
    abstract: [
      "\nDpb11 is required for the initiation of DNA replication in budding yeast. We found that Dpb11 binds tightly to single-stranded DNA (ssDNA) or branched DNA structures, while its human homolog, TopBP1, binds tightly to branched-DNA structures. We also found that Dpb11 binds stably to CDK-phosphorylated RPA, the eukaryotic ssDNA binding protein, in the presence of branched DNA. A Dpb11 mutant specifically defective for DNA binding did not exhibit tight binding to RPA in the presence of DNA, suggesting that Dpb11-interaction with DNA may promote the recruitment of RPA to melted DNA. We then characterized a mutant of Dpb11 that is specifically defective in DNA binding in budding yeast cells. Expression of dpb11-m1,2,3,5,ΔC results in a substantial decrease in RPA recruitment to origins, suggesting that Dpb11 interaction with DNA may be required for RPA recruitment to origins. Expression of dpb11-m1,2,3,5,ΔC also results in diminished GINS interaction with Mcm2-7 during S phase, while Cdc45 interaction with Mcm2-7 is like wild-type. The reduced GINS interaction with Mcm2-7 may be an indirect consequence of diminished origin melting. We propose that the tight interaction between Dpb11, CDK-phosphorylated RPA, and branched-DNA may be required for the essential function of stabilizing melted origin DNA in vivo. We also propose an alternative model, wherein Dpb11-DNA interaction is required for some other function in DNA replication initiation, such as helicase activation.\n",
    ],
    title_display:
      "Dpb11 may function with RPA and DNA to initiate DNA replication",
    score: 7.018296,
  },
  {
    id: "10.1371/journal.pgen.1006699",
    journal: "Wall Street",
    eissn: "1553-7404",
    publication_date: "2017-02-10T00:00:00Z",
    article_type: "Newspaper",
    author_display: [
      "Concetta Cuozzo",
      "Antonio Porcellini",
      "Tiziana Angrisano",
      "Annalisa Morano",
      "Bongyong Lee",
      "Alba Di Pardo",
      "Samantha Messina",
      "Rodolfo Iuliano",
      "Alfredo Fusco",
      "Maria R. Santillo",
      "Mark T. Muller",
      "Lorenzo Chiariotti",
      "Max E. Gottesman",
      "Enrico V. Avvedimento",
    ],
    abstract: [""],
    title_display:
      "Correction: DNA Damage, Homology-Directed Repair, and DNA Methylation",
    score: 7.018296,
  },
];

async function newArrays() {
  let newArray = [];
  newArray = docs.concat(arrayToAdd);
  console.log(`#8 New Array:`, newArray);
}

/* Point # 9: Develop a function that takes the odd positions of the given array "docs" then with the new
  array obtained it must be modified so that the list of objects has the following format.
  a) "title" must be equal to concatenate "journal" and "title_display".
  b) "score" must be equal to "score".
  c) "article_type" must be equal to "article_type".
  d) "authors" must be equal to concatenate the array "author_display" separated by "-".
  e) “id” must be equal to “id”.
  Create a function to sort in descending order that receives the array to be sorted and the
  property to be sorted as parameters and print the new sorted array in the console.
  Call this new function to organize the new array obtained. */
let oddArrays = [];
async function oddPositionsArray() {
  oddArrays = docs.filter((num, index) => index % 2 != 0);
  console.log(`#9 Odd Arrays:`, oddArrays);

  docs.forEach((doc, index) => {
    if (index % 2 !== 0) {
      oddArrays.push({
        id: doc.id,
        title: doc.title_display + " - " + doc.journal,
        score: doc.score,
        article_type: doc.article_type,
        authors: doc.author_display.join(" - "),
      });
    }
  });
  console.log(`#9.1 New Odd Arrays`, oddArrays);
}

async function sortArrays(sortedArray, property) {
  let arraySorted = [];
  let valueTypeOf = sortedArray.map((item) => item[property]);

  if (typeof valueTypeOf == "string") {
    arraySorted = sortedArray.sort((a, b) =>
      a[property] > b[property] ? 1 : -1
    );
  } else {
    return 0;
  }
  console.log(`#9.2 Descending Order ${property}:`, arraySorted);
}

get();
