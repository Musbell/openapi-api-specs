// Information about the Nobel Prizes and the Nobel Prize Laureates

namespace nobel-prize-master-data {

// Obtain information about all Nobel Prizes or search for a specific set of Nobel Prizes. Note that not all information about the Laureates are provided in the output, as a request of making this endpoints response lighter. Call the laureates endpoint for full information.
type nobelPrizes = (_: {
// The number of items to skip before starting to collect the result set
offset?: integer,
// The numbers of items to return
limit?: integer,
// The sort order (result is sorted by year)
sort?: string,
// Year the Nobel Prize was awarded, in the form of YYYY
nobelPrizeYear?: integer,
// Used in combination with nobelPrizeYear to specify a range of years to return results from. NobelPrizeYear is required
yearTo?: integer,
// Nobel Prize category
nobelPrizeCategory?: string,
// Format of output (Default = json)
format?: string,
}) => any;

// Obtain information about one specific Nobel Prize. Used as unique identifier for links.
type nobelPrize = (_: {
// Nobel Prize category
category: string,
// Year of the awarded Nobel Prize, in the form of YYYY
year: integer,
}) => any;

// Obtain information about Nobel Prize Laureates (persons and organizations) and their Nobel Prize(s), or search for a set of Laureates. Returns full information about the Laureates and Prizes.
type laureates = (_: {
// The number of items to skip before starting to collect the result set
offset?: integer,
// The numbers of items to return
limit?: integer,
// Sort order, result is sorted alphabetically by known name
sort?: string,
// Numeric ID of the Laureate (unique key for each Nobel Laureate)
ID?: integer,
// Laureate's name (person or organization)
name?: string,
// Laureate's gender if person
gender?: string,
// Birth date of Laureate if Person. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
birthDate?: integer,
// Return Laureates born within a range of years between birthDate and birthDateTo. BirthDate field is required
birthDateTo?: string,
// Death date of Laureate if Person. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
deathDate?: string,
// Return Laureates deceased within a range of years between deathDate and deathhDateTo. DeathDate field is required
deathDateTo?: integer,
// Laureate's city of birth if person
birthCity?: string,
// Laureate's country of birth if person
birthCountry?: string,
// Laureate's continent of birth if person. Continent as in geonames.org standard
birthContinent?: string,
// Laureate's city of death if person
deathCity?: string,
// Laureate's country of death if person
deathCountry?: string,
// Laureate's continent of death if person. Continent as in geonames.org standard
deathContinent?: string,
// The year the Nobel Prize was awarded, in the form of YYYY
nobelPrizeYear?: integer,
// Used in combination with nobelPrizeYear to specify a range of years between nobelPrizeYear and YearTo. nobelPrizeYear is required
yearTo?: integer,
// Nobel Prize category.
nobelPrizeCategory?: string,
// Output format (Default = json).
format?: string,
}) => any;

// Obtain information about an specific Nobel Prize Laureate. Used as unique identifier.
type laureate = (_: {
// Numeric Laureate's ID. Unique key.
laureateID: integer,
}) => any;

} // namespace nobel-prize-master-data

************ Response from plugin tool: ************
[
  {
    "id": "745",
    "knownName": {
      "en": "A. Michael Spence",
      "se": "A. Michael Spence"
    },
    "givenName": {
      "en": "A. Michael",
      "se": "A. Michael"
    },
    "familyName": {
      "en": "Spence",
      "se": "Spence"
    },
    "fullName": {
      "en": "A. Michael Spence",
      "se": "A. Michael Spence"
    },
    "fileName": "spence",
    "gender": "male",
    "birth": {
      "date": "1943-00-00",
      "place": {
        "city": {
          "en": "Montclair, NJ",
          "no": "Montclair, NJ",
          "se": "Montclair, NJ"
        },
        "country": {
          "en": "USA",
          "no": "USA",
          "se": "USA"
        },
        "cityNow": {
          "en": "Montclair, NJ",
          "no": "Montclair, NJ",
          "se": "Montclair, NJ",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q678437",
            "https://www.wikipedia.org/wiki/Montclair,_New_Jersey"
          ]
        },
        "countryNow": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q30"
          ]
        },
        "continent": {
          "en": "North America",
          "no": "Nord-Amerika",
          "se": "Nordamerika"
        },
        "locationString": {
          "en": "Montclair, NJ, USA",
          "no": "Montclair, NJ, USA",
          "se": "Montclair, NJ, USA"
        }
      }
    },
    "wikipedia": {
      "slug": "Michael_Spence",
      "english": "https://en.wikipedia.org/wiki/Michael_Spence"
    },
    "wikidata": {
      "id": "Q157245",
      "url": "https://www.wikidata.org/wiki/Q157245"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q157245",
      "https://en.wikipedia.org/wiki/Michael_Spence"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/745",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/745",
        "title": "A. Michael Spence - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2001",
        "category": {
          "en": "Economic Sciences",
          "no": "\u00d8konomi",
          "se": "Ekonomi"
        },
        "categoryFullName": {
          "en": "The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel",
          "no": "Sveriges Riksbanks pris i \u00f8konomisk vitenskap til minne om Alfred Nobel",
          "se": "Sveriges Riksbanks pris i ekonomisk vetenskap till Alfred Nobels minne"
        },
        "sortOrder": "2",
        "portion": "1/3",
        "dateAwarded": "2001-10-10",
        "prizeStatus": "received",
        "motivation": {
          "en": "for their analyses of markets with asymmetric information",
          "se": "f\u00f6r deras analys av marknader med assymetrisk informations"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 12518033,
        "affiliations": [
          {
            "name": {
              "en": "Stanford University",
              "no": "Stanford University",
              "se": "Stanford University"
            },
            "nameNow": {
              "en": "Stanford University"
            },
            "city": {
              "en": "Stanford, CA",
              "no": "Stanford, CA",
              "se": "Stanford, CA"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Stanford, CA",
              "no": "Stanford, CA",
              "se": "Stanford, CA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q173813",
                "https://www.wikipedia.org/wiki/Stanford,_California"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Stanford, CA, USA",
              "no": "Stanford, CA, USA",
              "se": "Stanford, CA, USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/eco/2001",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/economic-sciences/2001/spence/facts/",
            "title": "A. Michael Spence - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/economic-sciences/2001/summary/",
            "title": "The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2001",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ],
    "meta": {
      "terms": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/",
      "license": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#licence",
      "disclaimer": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#disclaimer"
    }
  },
  {
    "id": "102",
    "knownName": {
      "en": "Aage N. Bohr",
      "se": "Aage N. Bohr"
    },
    "givenName": {
      "en": "Aage N.",
      "se": "Aage N."
    },
    "familyName": {
      "en": "Bohr",
      "se": "Bohr"
    },
    "fullName": {
      "en": "Aage Niels Bohr",
      "se": "Aage Niels Bohr"
    },
    "fileName": "bohr",
    "gender": "male",
    "birth": {
      "date": "1922-06-19",
      "place": {
        "city": {
          "en": "Copenhagen",
          "no": "K\u00f8benhavn",
          "se": "K\u00f6penhamn"
        },
        "country": {
          "en": "Denmark",
          "no": "Danmark",
          "se": "Danmark"
        },
        "cityNow": {
          "en": "Copenhagen",
          "no": "K\u00f8benhavn",
          "se": "K\u00f6penhamn",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1748",
            "https://www.wikipedia.org/wiki/Copenhagen"
          ]
        },
        "countryNow": {
          "en": "Denmark",
          "no": "Danmark",
          "se": "Danmark",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q35"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Copenhagen, Denmark",
          "no": "K\u00f8benhavn, Danmark",
          "se": "K\u00f6penhamn, Danmark"
        }
      }
    },
    "death": {
      "date": "2009-09-08",
      "place": {
        "city": {
          "en": "Copenhagen",
          "no": "K\u00f8benhavn",
          "se": "K\u00f6penhamn"
        },
        "country": {
          "en": "Denmark",
          "no": "Danmark",
          "se": "Danmark",
          "sameAs": "https://www.wikidata.org/wiki/Q35"
        },
        "cityNow": {
          "en": "Copenhagen",
          "no": "K\u00f8benhavn",
          "se": "K\u00f6penhamn",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1748",
            "https://www.wikipedia.org/wiki/Copenhagen"
          ]
        },
        "countryNow": {
          "en": "Denmark",
          "no": "Danmark",
          "se": "Danmark",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q35"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Copenhagen, Denmark",
          "no": "K\u00f8benhavn, Danmark",
          "se": "K\u00f6penhamn, Danmark"
        }
      }
    },
    "wikipedia": {
      "slug": "Aage_Bohr",
      "english": "https://en.wikipedia.org/wiki/Aage_Bohr"
    },
    "wikidata": {
      "id": "Q103854",
      "url": "https://www.wikidata.org/wiki/Q103854"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q103854",
      "https://en.wikipedia.org/wiki/Aage_Bohr"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/102",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/102",
        "title": "Aage N. Bohr - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1975",
        "category": {
          "en": "Physics",
          "no": "Fysikk",
          "se": "Fysik"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Physics",
          "no": "Nobelprisen i fysikk",
          "se": "Nobelpriset i fysik"
        },
        "sortOrder": "1",
        "portion": "1/3",
        "dateAwarded": "1975-10-17",
        "prizeStatus": "received",
        "motivation": {
          "en": "for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection",
          "se": "f\u00f6r uppt\u00e4ckten av sambandet mellan kollektiva r\u00f6relser och partikelr\u00f6relser i atomk\u00e4rnor, samt den d\u00e4rp\u00e5 baserade utvecklingen av teorien f\u00f6r atomk\u00e4rnans struktur"
        },
        "prizeAmount": 630000,
        "prizeAmountAdjusted": 3465908,
        "affiliations": [
          {
            "name": {
              "en": "Niels Bohr Institute",
              "no": "Niels Bohr Institute",
              "se": "Niels Bohr Institute"
            },
            "nameNow": {
              "en": "Niels Bohr Institute"
            },
            "city": {
              "en": "Copenhagen",
              "no": "K\u00f8benhavn",
              "se": "K\u00f6penhamn"
            },
            "country": {
              "en": "Denmark",
              "no": "Danmark",
              "se": "Danmark"
            },
            "cityNow": {
              "en": "Copenhagen",
              "no": "K\u00f8benhavn",
              "se": "K\u00f6penhamn",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q1748",
                "https://www.wikipedia.org/wiki/Copenhagen"
              ]
            },
            "countryNow": {
              "en": "Denmark",
              "no": "Danmark",
              "se": "Danmark",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q35"
              ]
            },
            "locationString": {
              "en": "Copenhagen, Denmark",
              "no": "K\u00f8benhavn, Danmark",
              "se": "K\u00f6penhamn, Danmark"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/phy/1975",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/1975/bohr/facts/",
            "title": "Aage N. Bohr - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/1975/summary/",
            "title": "The Nobel Prize in Physics 1975",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "779",
    "knownName": {
      "en": "Aaron Ciechanover",
      "se": "Aaron Ciechanover"
    },
    "givenName": {
      "en": "Aaron",
      "se": "Aaron"
    },
    "familyName": {
      "en": "Ciechanover",
      "se": "Ciechanover"
    },
    "fullName": {
      "en": "Aaron Ciechanover",
      "se": "Aaron Ciechanover"
    },
    "fileName": "ciechanover",
    "gender": "male",
    "birth": {
      "date": "1947-10-01",
      "place": {
        "city": {
          "en": "Haifa",
          "no": "Haifa",
          "se": "Haifa"
        },
        "country": {
          "en": "British Protectorate of Palestine",
          "no": "British i Palestina",
          "se": "British Protectorate of Palestine"
        },
        "cityNow": {
          "en": "Haifa",
          "no": "Haifa",
          "se": "Haifa",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q41621",
            "https://www.wikipedia.org/wiki/Haifa"
          ]
        },
        "countryNow": {
          "en": "Israel",
          "no": "Israel",
          "se": "Israel",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q801"
          ]
        },
        "continent": {
          "en": "Asia",
          "no": "Asia",
          "se": "Asien"
        },
        "locationString": {
          "en": "Haifa, British Protectorate of Palestine (now Israel)",
          "no": "Haifa, British i Palestina (n\u00e5 Israel)",
          "se": "Haifa, British Protectorate of Palestine (nu Israel)"
        }
      }
    },
    "wikipedia": {
      "slug": "Aaron_Ciechanover",
      "english": "https://en.wikipedia.org/wiki/Aaron_Ciechanover"
    },
    "wikidata": {
      "id": "Q233205",
      "url": "https://www.wikidata.org/wiki/Q233205"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q233205",
      "https://en.wikipedia.org/wiki/Aaron_Ciechanover"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/779",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/779",
        "title": "Aaron Ciechanover - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2004",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "1",
        "portion": "1/3",
        "dateAwarded": "2004-10-06",
        "prizeStatus": "received",
        "motivation": {
          "en": "for the discovery of ubiquitin-mediated protein degradation",
          "se": "f\u00f6r uppt\u00e4ckten av ubiquitinmedierad proteinnedbrytning"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 11976161,
        "affiliations": [
          {
            "name": {
              "en": "Technion - Israel Institute of Technology",
              "no": "Technion - Israel Institute of Technology",
              "se": "Technion - Israel Institute of Technology"
            },
            "nameNow": {
              "en": "Technion - Israel Institute of Technology"
            },
            "city": {
              "en": "Haifa",
              "no": "Haifa",
              "se": "Haifa"
            },
            "country": {
              "en": "Israel",
              "no": "Israel",
              "se": "Israel"
            },
            "cityNow": {
              "en": "Haifa",
              "no": "Haifa",
              "se": "Haifa",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q41621",
                "https://www.wikipedia.org/wiki/Haifa"
              ]
            },
            "countryNow": {
              "en": "Israel",
              "no": "Israel",
              "se": "Israel",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q801"
              ]
            },
            "locationString": {
              "en": "Haifa, Israel",
              "no": "Haifa, Israel",
              "se": "Haifa, Israel"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/2004",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2004/ciechanover/facts/",
            "title": "Aaron Ciechanover - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2004/summary/",
            "title": "The Nobel Prize in Chemistry 2004",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "259",
    "knownName": {
      "en": "Aaron Klug",
      "se": "Aaron Klug"
    },
    "givenName": {
      "en": "Aaron",
      "se": "Aaron"
    },
    "familyName": {
      "en": "Klug",
      "se": "Klug"
    },
    "fullName": {
      "en": "Aaron Klug",
      "se": "Aaron Klug"
    },
    "fileName": "klug",
    "gender": "male",
    "birth": {
      "date": "1926-08-11",
      "place": {
        "city": {
          "en": "Zelvas",
          "no": "Zelvas",
          "se": "Zelvas"
        },
        "country": {
          "en": "Lithuania",
          "no": "Litauen",
          "se": "Litauen"
        },
        "cityNow": {
          "en": "Zelvas",
          "no": "Zelvas",
          "se": "Zelvas",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q691679",
            "https://www.wikipedia.org/wiki/%C5%BDelva"
          ]
        },
        "countryNow": {
          "en": "Lithuania",
          "no": "Litauen",
          "se": "Litauen",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q37"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Zelvas, Lithuania",
          "no": "Zelvas, Litauen",
          "se": "Zelvas, Litauen"
        }
      }
    },
    "death": {
      "date": "2018-11-20",
      "place": {
        "locationString": {
          "en": "",
          "no": "",
          "se": ""
        }
      }
    },
    "wikipedia": {
      "slug": "Aaron_Klug",
      "english": "https://en.wikipedia.org/wiki/Aaron_Klug"
    },
    "wikidata": {
      "id": "Q190626",
      "url": "https://www.wikidata.org/wiki/Q190626"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q190626",
      "https://en.wikipedia.org/wiki/Aaron_Klug"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/259",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/259",
        "title": "Aaron Klug - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1982",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "1",
        "portion": "1",
        "dateAwarded": "1982-10-18",
        "prizeStatus": "received",
        "motivation": {
          "en": "for his development of crystallographic electron microscopy and his structural elucidation of biologically important nucleic acid-protein complexes",
          "se": "f\u00f6r hans utveckling av kristallografisk elektronmikroskopi och hans klarl\u00e4ggande av strukturen hos biologiskt viktiga nukleinsyra-proteinkomplex"
        },
        "prizeAmount": 1150000,
        "prizeAmountAdjusted": 3158777,
        "affiliations": [
          {
            "name": {
              "en": "MRC Laboratory of Molecular Biology",
              "no": "MRC Laboratory of Molecular Biology",
              "se": "MRC Laboratory of Molecular Biology"
            },
            "nameNow": {
              "en": "MRC Laboratory of Molecular Biology"
            },
            "city": {
              "en": "Cambridge",
              "no": "Cambridge",
              "se": "Cambridge"
            },
            "country": {
              "en": "United Kingdom",
              "no": "Storbritannia",
              "se": "Storbritannien"
            },
            "cityNow": {
              "en": "Cambridge",
              "no": "Cambridge",
              "se": "Cambridge",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q350",
                "https://www.wikipedia.org/wiki/Cambridge"
              ]
            },
            "countryNow": {
              "en": "United Kingdom",
              "no": "Storbritannia",
              "se": "Storbritannien",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q145"
              ]
            },
            "locationString": {
              "en": "Cambridge, United Kingdom",
              "no": "Cambridge, Storbritannia",
              "se": "Cambridge, Storbritannien"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/1982",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1982/klug/facts/",
            "title": "Aaron Klug - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1982/summary/",
            "title": "The Nobel Prize in Chemistry 1982",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "1004",
    "knownName": {
      "en": "Abdulrazak Gurnah",
      "se": "Abdulrazak Gurnah"
    },
    "givenName": {
      "en": "Abdulrazak",
      "se": "Abdulrazak"
    },
    "familyName": {
      "en": "Gurnah",
      "se": "Gurnah"
    },
    "fullName": {
      "en": "Abdulrazak Gurnah",
      "se": "Abdulrazak Gurnah"
    },
    "fileName": "gurnah",
    "gender": "male",
    "birth": {
      "date": "1948-00-00"
    },
    "wikipedia": {
      "slug": "Abdulrazak_Gurnah",
      "english": "https://en.wikipedia.org/wiki/Abdulrazak_Gurnah"
    },
    "wikidata": {
      "id": "Q317877",
      "url": "https://www.wikidata.org/wiki/Q317877"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q317877",
      "https://en.wikipedia.org/wiki/Abdulrazak_Gurnah"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/1004",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/1004",
        "title": "Abdulrazak Gurnah - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2021",
        "category": {
          "en": "Literature",
          "no": "Litteratur",
          "se": "Litteratur"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Literature",
          "no": "Nobelprisen i litteratur",
          "se": "Nobelpriset i litteratur"
        },
        "sortOrder": "1",
        "portion": "1",
        "dateAwarded": "2021-10-07",
        "prizeStatus": "received",
        "motivation": {
          "en": "for his uncompromising and compassionate penetration of the effects of colonialism and the fate of the refugee in the gulf between cultures and continents"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 10000000,
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/lit/2021",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/literature/2021/gurnah/facts/",
            "title": "Abdulrazak Gurnah - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/literature/2021/summary/",
            "title": "The Nobel Prize in Literature 2021",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "114",
    "knownName": {
      "en": "Abdus Salam",
      "se": "Abdus Salam"
    },
    "givenName": {
      "en": "Abdus",
      "se": "Abdus"
    },
    "familyName": {
      "en": "Salam",
      "se": "Salam"
    },
    "fullName": {
      "en": "Abdus Salam",
      "se": "Abdus Salam"
    },
    "fileName": "salam",
    "gender": "male",
    "birth": {
      "date": "1926-01-29",
      "place": {
        "city": {
          "en": "Jhang Maghi\u0101na",
          "no": "Jhang Maghi\u0101na",
          "se": "Jhang Maghi\u0101na"
        },
        "country": {
          "en": "India",
          "no": "India",
          "se": "Indien"
        },
        "cityNow": {
          "en": "Jhang Maghi\u0101na",
          "no": "Jhang Maghi\u0101na",
          "se": "Jhang Maghi\u0101na",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1026616",
            "https://www.wikipedia.org/wiki/Jhang"
          ]
        },
        "countryNow": {
          "en": "Pakistan",
          "no": "Pakistan",
          "se": "Pakistan",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q843"
          ]
        },
        "continent": {
          "en": "Asia",
          "no": "Asia",
          "se": "Asien"
        },
        "locationString": {
          "en": "Jhang Maghi\u0101na, India (now Pakistan)",
          "no": "Jhang Maghi\u0101na, India (n\u00e5 Pakistan)",
          "se": "Jhang Maghi\u0101na, Indien (nu Pakistan)"
        }
      }
    },
    "death": {
      "date": "1996-11-21",
      "place": {
        "city": {
          "en": "Oxford",
          "no": "Oxford",
          "se": "Oxford"
        },
        "country": {
          "en": "United Kingdom",
          "no": "Storbritannia",
          "se": "Storbritannien",
          "sameAs": "https://www.wikidata.org/wiki/Q145"
        },
        "cityNow": {
          "en": "Oxford",
          "no": "Oxford",
          "se": "Oxford",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q34217",
            "https://www.wikipedia.org/wiki/Oxford"
          ]
        },
        "countryNow": {
          "en": "United Kingdom",
          "no": "Storbritannia",
          "se": "Storbritannien",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q145"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Oxford, United Kingdom",
          "no": "Oxford, Storbritannia",
          "se": "Oxford, Storbritannien"
        }
      }
    },
    "wikipedia": {
      "slug": "Abdus_Salam",
      "english": "https://en.wikipedia.org/wiki/Abdus_Salam"
    },
    "wikidata": {
      "id": "Q28189",
      "url": "https://www.wikidata.org/wiki/Q28189"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q28189",
      "https://en.wikipedia.org/wiki/Abdus_Salam"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/114",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/114",
        "title": "Abdus Salam - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1979",
        "category": {
          "en": "Physics",
          "no": "Fysikk",
          "se": "Fysik"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Physics",
          "no": "Nobelprisen i fysikk",
          "se": "Nobelpriset i fysik"
        },
        "sortOrder": "2",
        "portion": "1/3",
        "dateAwarded": "1979-10-15",
        "prizeStatus": "received",
        "motivation": {
          "en": "for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current",
          "se": "f\u00f6r deras insatser inom teorin f\u00f6r f\u00f6renad svag och elektromagnetisk v\u00e4xelverkan mellan elementar partiklar, innefattande bl.a. f\u00f6ruts\u00e4gelsen av den svaga neutrala str\u00f6mmen"
        },
        "prizeAmount": 800000,
        "prizeAmountAdjusted": 3042231,
        "affiliations": [
          {
            "name": {
              "en": "International Centre for Theoretical Physics",
              "no": "International Centre for Theoretical Physics",
              "se": "International Centre for Theoretical Physics"
            },
            "nameNow": {
              "en": "International Centre for Theoretical Physics"
            },
            "city": {
              "en": "Trieste",
              "no": "Trieste",
              "se": "Trieste"
            },
            "country": {
              "en": "Italy",
              "no": "Italia",
              "se": "Italien"
            },
            "cityNow": {
              "en": "Trieste",
              "no": "Trieste",
              "se": "Trieste",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q546",
                "https://www.wikipedia.org/wiki/Trieste"
              ]
            },
            "countryNow": {
              "en": "Italy",
              "no": "Italia",
              "se": "Italien",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q38"
              ]
            },
            "locationString": {
              "en": "Trieste, Italy",
              "no": "Trieste, Italia",
              "se": "Trieste, Italien"
            }
          },
          {
            "name": {
              "en": "Imperial College",
              "no": "Imperial College",
              "se": "Imperial College"
            },
            "nameNow": {
              "en": "Imperial College"
            },
            "city": {
              "en": "London",
              "no": "London",
              "se": "London"
            },
            "country": {
              "en": "United Kingdom",
              "no": "Storbritannia",
              "se": "Storbritannien"
            },
            "cityNow": {
              "en": "London",
              "no": "London",
              "se": "London",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q84",
                "https://www.wikipedia.org/wiki/London"
              ]
            },
            "countryNow": {
              "en": "United Kingdom",
              "no": "Storbritannia",
              "se": "Storbritannien",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q145"
              ]
            },
            "locationString": {
              "en": "London, United Kingdom",
              "no": "London, Storbritannia",
              "se": "London, Storbritannien"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/phy/1979",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/1979/salam/facts/",
            "title": "Abdus Salam - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/1979/summary/",
            "title": "The Nobel Prize in Physics 1979",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "982",
    "knownName": {
      "en": "Abhijit Banerjee",
      "se": "Abhijit Banerjee"
    },
    "givenName": {
      "en": "Abhijit",
      "se": "Abhijit"
    },
    "familyName": {
      "en": "Banerjee",
      "se": "Banerjee"
    },
    "fullName": {
      "en": "Abhijit Banerjee",
      "se": "Abhijit Banerjee"
    },
    "fileName": "banerjee",
    "gender": "male",
    "birth": {
      "date": "1961-02-21",
      "place": {
        "city": {
          "en": "Mumbai",
          "no": "Mumbai",
          "se": "Mumbai"
        },
        "country": {
          "en": "India",
          "no": "India",
          "se": "Indien"
        },
        "cityNow": {
          "en": "Mumbai",
          "no": "Mumbai",
          "se": "Mumbai",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1156",
            "https://www.wikipedia.org/wiki/Mumbai"
          ]
        },
        "countryNow": {
          "en": "India",
          "no": "India",
          "se": "Indien",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q668"
          ]
        },
        "continent": {
          "en": "Asia",
          "no": "Asia",
          "se": "Asien"
        },
        "locationString": {
          "en": "Mumbai, India",
          "no": "Mumbai, India",
          "se": "Mumbai, Indien"
        }
      }
    },
    "wikipedia": {
      "slug": "Abhijit_Banerjee",
      "english": "https://en.wikipedia.org/wiki/Abhijit_Banerjee"
    },
    "wikidata": {
      "id": "Q320578",
      "url": "https://www.wikidata.org/wiki/Q320578"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q320578",
      "https://en.wikipedia.org/wiki/Abhijit_Banerjee"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/982",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/982",
        "title": "Abhijit Banerjee - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2019",
        "category": {
          "en": "Economic Sciences",
          "no": "\u00d8konomi",
          "se": "Ekonomi"
        },
        "categoryFullName": {
          "en": "The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel",
          "no": "Sveriges Riksbanks pris i \u00f8konomisk vitenskap til minne om Alfred Nobel",
          "se": "Sveriges Riksbanks pris i ekonomisk vetenskap till Alfred Nobels minne"
        },
        "sortOrder": "1",
        "portion": "1/3",
        "dateAwarded": "2019-10-14",
        "prizeStatus": "received",
        "motivation": {
          "en": "for their experimental approach to alleviating global poverty",
          "se": "f\u00f6r deras experimentella ansats f\u00f6r att mildra global fattigdom"
        },
        "prizeAmount": 9000000,
        "prizeAmountAdjusted": 9000000,
        "affiliations": [
          {
            "name": {
              "en": "Massachusetts Institute of Technology (MIT)",
              "no": "Massachusetts Institute of Technology (MIT)",
              "se": "Massachusetts Institute of Technology (MIT)"
            },
            "nameNow": {
              "en": "Massachusetts Institute of Technology (MIT)"
            },
            "city": {
              "en": "Cambridge, MA",
              "no": "Cambridge, MA",
              "se": "Cambridge, MA"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Cambridge, MA",
              "no": "Cambridge, MA",
              "se": "Cambridge, MA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q49111",
                "https://www.wikipedia.org/wiki/Cambridge,_Massachusetts"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Cambridge, MA, USA",
              "no": "Cambridge, MA, USA",
              "se": "Cambridge, MA, USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/eco/2019",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/economic-sciences/2019/banerjee/facts/",
            "title": "Abhijit Banerjee - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/economic-sciences/2019/summary/",
            "title": "The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2019",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "981",
    "knownName": {
      "en": "Abiy Ahmed Ali",
      "se": "Abiy Ahmed Ali"
    },
    "givenName": {
      "en": "Abiy",
      "se": "Abiy"
    },
    "familyName": {
      "en": "Ahmed Ali",
      "se": "Ahmed Ali"
    },
    "fullName": {
      "en": "Abiy Ahmed Ali",
      "se": "Abiy Ahmed Ali"
    },
    "fileName": "abiy",
    "gender": "male",
    "birth": {
      "date": "1976-08-15",
      "place": {
        "city": {
          "en": "Beshasha",
          "no": "Beshasha",
          "se": "Beshasha"
        },
        "country": {
          "en": "Ethiopia",
          "no": "Etiopia",
          "se": "Etiopien"
        },
        "cityNow": {
          "en": "Beshasha",
          "no": "Beshasha",
          "se": "Beshasha",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q2899862",
            "https://www.wikipedia.org/wiki/Beshasha"
          ]
        },
        "countryNow": {
          "en": "Ethiopia",
          "no": "Etiopia",
          "se": "Etiopien",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q115"
          ]
        },
        "continent": {
          "en": "Africa",
          "no": "Afrika",
          "se": "Afrika"
        },
        "locationString": {
          "en": "Beshasha, Ethiopia",
          "no": "Beshasha, Etiopia",
          "se": "Beshasha, Etiopien"
        }
      }
    },
    "wikipedia": {
      "slug": "Abiy_Ahmed",
      "english": "https://en.wikipedia.org/wiki/Abiy_Ahmed"
    },
    "wikidata": {
      "id": "Q50365049",
      "url": "https://www.wikidata.org/wiki/Q50365049"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q50365049",
      "https://en.wikipedia.org/wiki/Abiy_Ahmed"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/981",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/981",
        "title": "Abiy Ahmed Ali - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2019",
        "category": {
          "en": "Peace",
          "no": "Fred",
          "se": "Fred"
        },
        "categoryFullName": {
          "en": "The Nobel Peace Prize",
          "no": "Nobels fredspris",
          "se": "Nobels fredspris"
        },
        "sortOrder": "1",
        "portion": "1",
        "dateAwarded": "2019-10-11",
        "prizeStatus": "received",
        "motivation": {
          "en": "for his efforts to achieve peace and international cooperation, and in particular for his decisive initiative to resolve the border conflict with neighbouring Eritrea",
          "no": "for hans innsats for fred og mellomstatlig samarbeid, og da s\u00e6rlig for hans avgj\u00f8rande initiativ for \u00e5 l\u00f8sa grensekonflikten med nabolandet Eritrea"
        },
        "prizeAmount": 9000000,
        "prizeAmountAdjusted": 9000000,
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/pea/2019",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/peace/2019/abiy/facts/",
            "title": "Abiy Ahmed Ali - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/peace/2019/summary/",
            "title": "The Nobel Peace Prize 2019",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "843",
    "knownName": {
      "en": "Ada E. Yonath",
      "se": "Ada E. Yonath"
    },
    "givenName": {
      "en": "Ada E.",
      "se": "Ada E."
    },
    "familyName": {
      "en": "Yonath",
      "se": "Yonath"
    },
    "fullName": {
      "en": "Ada E. Yonath",
      "se": "Ada E. Yonath"
    },
    "fileName": "yonath",
    "gender": "female",
    "birth": {
      "date": "1939-06-22",
      "place": {
        "city": {
          "en": "Jerusalem",
          "no": "Jerusalem",
          "se": "Jerusalem"
        },
        "country": {
          "en": "British Mandate of Palestine",
          "no": "Palestinamandatet",
          "se": "Brittiska Palestinamandatet"
        },
        "cityNow": {
          "en": "Jerusalem",
          "no": "Jerusalem",
          "se": "Jerusalem",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1218",
            "https://www.wikipedia.org/wiki/Jerusalem"
          ]
        },
        "countryNow": {
          "en": "Israel",
          "no": "Israel",
          "se": "Israel",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q801"
          ]
        },
        "continent": {
          "en": "Asia",
          "no": "Asia",
          "se": "Asien"
        },
        "locationString": {
          "en": "Jerusalem, British Mandate of Palestine (now Israel)",
          "no": "Jerusalem, Palestinamandatet (n\u00e5 Israel)",
          "se": "Jerusalem, Brittiska Palestinamandatet (nu Israel)"
        }
      }
    },
    "wikipedia": {
      "slug": "Ada_Yonath",
      "english": "https://en.wikipedia.org/wiki/Ada_Yonath"
    },
    "wikidata": {
      "id": "Q7426",
      "url": "https://www.wikidata.org/wiki/Q7426"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q7426",
      "https://en.wikipedia.org/wiki/Ada_Yonath"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/843",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/843",
        "title": "Ada E. Yonath - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2009",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "3",
        "portion": "1/3",
        "dateAwarded": "2009-10-07",
        "prizeStatus": "received",
        "motivation": {
          "en": "for studies of the structure and function of the ribosome",
          "se": "f\u00f6r studier av ribosomens struktur och funktion"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 11157218,
        "affiliations": [
          {
            "name": {
              "en": "Weizmann Institute of Science",
              "no": "Weizmann Institute of Science",
              "se": "Weizmann Institute of Science"
            },
            "nameNow": {
              "en": "Weizmann Institute of Science"
            },
            "city": {
              "en": "Rehovot",
              "no": "Rehovot",
              "se": "Rehovot"
            },
            "country": {
              "en": "Israel",
              "no": "Israel",
              "se": "Israel"
            },
            "cityNow": {
              "en": "Rehovot",
              "no": "Rehovot",
              "se": "Rehovot",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q207350",
                "https://www.wikipedia.org/wiki/Rehovot"
              ]
            },
            "countryNow": {
              "en": "Israel",
              "no": "Israel",
              "se": "Israel",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q801"
              ]
            },
            "locationString": {
              "en": "Rehovot, Israel",
              "no": "Rehovot, Israel",
              "se": "Rehovot, Israel"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/2009",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2009/yonath/facts/",
            "title": "Ada E. Yonath - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2009/summary/",
            "title": "The Nobel Prize in Chemistry 2009",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "866",
    "knownName": {
      "en": "Adam G. Riess",
      "se": "Adam G. Riess"
    },
    "givenName": {
      "en": "Adam G.",
      "se": "Adam G."
    },
    "familyName": {
      "en": "Riess",
      "se": "Riess"
    },
    "fullName": {
      "en": "Adam G. Riess",
      "se": "Adam G. Riess"
    },
    "fileName": "riess",
    "gender": "male",
    "birth": {
      "date": "1969-12-16",
      "place": {
        "city": {
          "en": "Washington, D.C.",
          "no": "Washington, D.C.",
          "se": "Washington, D.C."
        },
        "country": {
          "en": "USA",
          "no": "USA",
          "se": "USA"
        },
        "cityNow": {
          "en": "Washington, D.C.",
          "no": "Washington, D.C.",
          "se": "Washington, D.C.",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q61",
            "https://www.wikipedia.org/wiki/Washington,_D.C."
          ]
        },
        "countryNow": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q30"
          ]
        },
        "continent": {
          "en": "North America",
          "no": "Nord-Amerika",
          "se": "Nordamerika"
        },
        "locationString": {
          "en": "Washington, D.C., USA",
          "no": "Washington, D.C., USA",
          "se": "Washington, D.C., USA"
        }
      }
    },
    "wikipedia": {
      "slug": "Adam_Riess",
      "english": "https://en.wikipedia.org/wiki/Adam_Riess"
    },
    "wikidata": {
      "id": "Q106454",
      "url": "https://www.wikidata.org/wiki/Q106454"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q106454",
      "https://en.wikipedia.org/wiki/Adam_Riess"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/866",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/866",
        "title": "Adam G. Riess - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2011",
        "category": {
          "en": "Physics",
          "no": "Fysikk",
          "se": "Fysik"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Physics",
          "no": "Nobelprisen i fysikk",
          "se": "Nobelpriset i fysik"
        },
        "sortOrder": "3",
        "portion": "1/4",
        "dateAwarded": "2011-10-04",
        "prizeStatus": "received",
        "motivation": {
          "en": "for the discovery of the accelerating expansion of the Universe through observations of distant supernovae",
          "se": "f\u00f6r uppt\u00e4ckten av universums accelererande expansion genom observationer av avl\u00e4gsna supernovor"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 10736783,
        "affiliations": [
          {
            "name": {
              "en": "Johns Hopkins University",
              "no": "Johns Hopkins University",
              "se": "Johns Hopkins University"
            },
            "nameNow": {
              "en": "Johns Hopkins University"
            },
            "city": {
              "en": "Baltimore, MD",
              "no": "Baltimore, MD",
              "se": "Baltimore, MD"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Baltimore, MD",
              "no": "Baltimore, MD",
              "se": "Baltimore, MD",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q5092",
                "https://www.wikipedia.org/wiki/Baltimore"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Baltimore, MD, USA",
              "no": "Baltimore, MD, USA",
              "se": "Baltimore, MD, USA"
            }
          },
          {
            "name": {
              "en": "Space Telescope Science Institute",
              "no": "Space Telescope Science Institute",
              "se": "Space Telescope Science Institute"
            },
            "nameNow": {
              "en": "Space Telescope Science Institute"
            },
            "city": {
              "en": "Baltimore, MD",
              "no": "Baltimore, MD",
              "se": "Baltimore, MD"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Baltimore, MD",
              "no": "Baltimore, MD",
              "se": "Baltimore, MD",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q5092",
                "https://www.wikipedia.org/wiki/Baltimore"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Baltimore, MD, USA",
              "no": "Baltimore, MD, USA",
              "se": "Baltimore, MD, USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/phy/2011",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/2011/riess/facts/",
            "title": "Adam G. Riess - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/2011/summary/",
            "title": "The Nobel Prize in Physics 2011",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "199",
    "knownName": {
      "en": "Adolf Butenandt",
      "se": "Adolf Butenandt"
    },
    "givenName": {
      "en": "Adolf",
      "se": "Adolf"
    },
    "familyName": {
      "en": "Butenandt",
      "se": "Butenandt"
    },
    "fullName": {
      "en": "Adolf Friedrich Johann Butenandt",
      "se": "Adolf Friedrich Johann Butenandt"
    },
    "fileName": "butenandt",
    "gender": "male",
    "birth": {
      "date": "1903-03-24",
      "place": {
        "city": {
          "en": "Bremerhaven-Lehe",
          "no": "Bremerhaven-Lehe",
          "se": "Bremerhaven-Lehe"
        },
        "country": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland"
        },
        "cityNow": {
          "en": "Bremerhaven-Lehe",
          "no": "Bremerhaven-Lehe",
          "se": "Bremerhaven-Lehe",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q2706",
            "https://www.wikipedia.org/wiki/Bremerhaven"
          ]
        },
        "countryNow": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q183"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Bremerhaven-Lehe, Germany",
          "no": "Bremerhaven-Lehe, Tyskland",
          "se": "Bremerhaven-Lehe, Tyskland"
        }
      }
    },
    "death": {
      "date": "1995-01-18",
      "place": {
        "city": {
          "en": "Munich",
          "no": "M\u00fcnchen",
          "se": "M\u00fcnchen"
        },
        "country": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": "https://www.wikidata.org/wiki/Q183"
        },
        "cityNow": {
          "en": "Munich",
          "no": "M\u00fcnchen",
          "se": "M\u00fcnchen",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1726",
            "https://www.wikipedia.org/wiki/Munich"
          ]
        },
        "countryNow": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q183"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Munich, Germany",
          "no": "M\u00fcnchen, Tyskland",
          "se": "M\u00fcnchen, Tyskland"
        }
      }
    },
    "wikipedia": {
      "slug": "Adolf_Butenandt",
      "english": "https://en.wikipedia.org/wiki/Adolf_Butenandt"
    },
    "wikidata": {
      "id": "Q5327",
      "url": "https://www.wikidata.org/wiki/Q5327"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q5327",
      "https://en.wikipedia.org/wiki/Adolf_Butenandt"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/199",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/199",
        "title": "Adolf Butenandt - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1939",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "1",
        "portion": "1/2",
        "prizeStatus": "received",
        "motivation": {
          "en": "for his work on sex hormones",
          "se": "f\u00f6r hans arbeten \u00f6ver sexualhormoner"
        },
        "prizeAmount": 148822,
        "prizeAmountAdjusted": 4304564,
        "affiliations": [
          {
            "name": {
              "en": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) f\u00fcr Biochemie",
              "no": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) f\u00fcr Biochemie",
              "se": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) f\u00fcr Biochemie"
            },
            "nameNow": {
              "en": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) f\u00fcr Biochemie"
            },
            "city": {
              "en": "Berlin-Dahlem",
              "no": "Berlin-Dahlem",
              "se": "Berlin-Dahlem"
            },
            "country": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland"
            },
            "cityNow": {
              "en": "Berlin-Dahlem",
              "no": "Berlin-Dahlem",
              "se": "Berlin-Dahlem",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q700541",
                "https://www.wikipedia.org/wiki/Dahlem_(Berlin)"
              ]
            },
            "countryNow": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q183"
              ]
            },
            "locationString": {
              "en": "Berlin-Dahlem, Germany",
              "no": "Berlin-Dahlem, Tyskland",
              "se": "Berlin-Dahlem, Tyskland"
            }
          },
          {
            "name": {
              "en": "Berlin University",
              "no": "Berlin University",
              "se": "Berlin University"
            },
            "nameNow": {
              "en": "Berlin University"
            },
            "city": {
              "en": "Berlin",
              "no": "Berlin",
              "se": "Berlin"
            },
            "country": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland"
            },
            "cityNow": {
              "en": "Berlin",
              "no": "Berlin",
              "se": "Berlin",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q64",
                "https://www.wikipedia.org/wiki/Berlin"
              ]
            },
            "countryNow": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q183"
              ]
            },
            "locationString": {
              "en": "Berlin, Germany",
              "no": "Berlin, Tyskland",
              "se": "Berlin, Tyskland"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/1939",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1939/butenandt/facts/",
            "title": "Adolf Butenandt - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1939/summary/",
            "title": "The Nobel Prize in Chemistry 1939",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "164",
    "knownName": {
      "en": "Adolf von Baeyer",
      "se": "Adolf von Baeyer"
    },
    "givenName": {
      "en": "Adolf",
      "se": "Adolf"
    },
    "familyName": {
      "en": "von Baeyer",
      "se": "von Baeyer"
    },
    "fullName": {
      "en": "Johann Friedrich Wilhelm Adolf von Baeyer",
      "se": "Johann Friedrich Wilhelm Adolf von Baeyer"
    },
    "fileName": "baeyer",
    "gender": "male",
    "birth": {
      "date": "1835-10-31",
      "place": {
        "city": {
          "en": "Berlin",
          "no": "Berlin",
          "se": "Berlin"
        },
        "country": {
          "en": "Prussia",
          "no": "Preussen",
          "se": "Preussen"
        },
        "cityNow": {
          "en": "Berlin",
          "no": "Berlin",
          "se": "Berlin",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q64",
            "https://www.wikipedia.org/wiki/Berlin"
          ]
        },
        "countryNow": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q183"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Berlin, Prussia (now Germany)",
          "no": "Berlin, Preussen (n\u00e5 Tyskland)",
          "se": "Berlin, Preussen (nu Tyskland)"
        }
      }
    },
    "death": {
      "date": "1917-08-20",
      "place": {
        "city": {
          "en": "Starnberg",
          "no": "Starnberg",
          "se": "Starnberg"
        },
        "country": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": "https://www.wikidata.org/wiki/Q183"
        },
        "cityNow": {
          "en": "Starnberg",
          "no": "Starnberg",
          "se": "Starnberg",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q61936",
            "https://www.wikipedia.org/wiki/Starnberg"
          ]
        },
        "countryNow": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q183"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Starnberg, Germany",
          "no": "Starnberg, Tyskland",
          "se": "Starnberg, Tyskland"
        }
      }
    },
    "wikipedia": {
      "slug": "Adolf_von_Baeyer",
      "english": "https://en.wikipedia.org/wiki/Adolf_von_Baeyer"
    },
    "wikidata": {
      "id": "Q57078",
      "url": "https://www.wikidata.org/wiki/Q57078"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q57078",
      "https://en.wikipedia.org/wiki/Adolf_von_Baeyer"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/164",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/164",
        "title": "Adolf von Baeyer - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1905",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "1",
        "portion": "1",
        "prizeStatus": "received",
        "motivation": {
          "en": "in recognition of his services in the advancement of organic chemistry and the chemical industry, through his work on organic dyes and hydroaromatic compounds",
          "se": "s\u00e5som ett erk\u00e4nnande av den f\u00f6rtj\u00e4nst han inlagt om den organiska kemiens och den kemiska industriens utveckling genom sina arbeten r\u00f6rande organiska f\u00e4rg\u00e4mnen och hydroaromatiska f\u00f6reningar"
        },
        "prizeAmount": 138089,
        "prizeAmountAdjusted": 7753291,
        "affiliations": [
          {
            "name": {
              "en": "Munich University",
              "no": "Munich University",
              "se": "Munich University"
            },
            "nameNow": {
              "en": "Munich University"
            },
            "city": {
              "en": "Munich",
              "no": "M\u00fcnchen",
              "se": "M\u00fcnchen"
            },
            "country": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland"
            },
            "cityNow": {
              "en": "Munich",
              "no": "M\u00fcnchen",
              "se": "M\u00fcnchen",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q1726",
                "https://www.wikipedia.org/wiki/Munich"
              ]
            },
            "countryNow": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q183"
              ]
            },
            "locationString": {
              "en": "Munich, Germany",
              "no": "M\u00fcnchen, Tyskland",
              "se": "M\u00fcnchen, Tyskland"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/1905",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1905/baeyer/facts/",
            "title": "Adolf von Baeyer - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1905/summary/",
            "title": "The Nobel Prize in Chemistry 1905",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "185",
    "knownName": {
      "en": "Adolf Windaus",
      "se": "Adolf Windaus"
    },
    "givenName": {
      "en": "Adolf",
      "se": "Adolf"
    },
    "familyName": {
      "en": "Windaus",
      "se": "Windaus"
    },
    "fullName": {
      "en": "Adolf Otto Reinhold Windaus",
      "se": "Adolf Otto Reinhold Windaus"
    },
    "fileName": "windaus",
    "gender": "male",
    "birth": {
      "date": "1876-12-25",
      "place": {
        "city": {
          "en": "Berlin",
          "no": "Berlin",
          "se": "Berlin"
        },
        "country": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland"
        },
        "cityNow": {
          "en": "Berlin",
          "no": "Berlin",
          "se": "Berlin",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q64",
            "https://www.wikipedia.org/wiki/Berlin"
          ]
        },
        "countryNow": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q183"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Berlin, Germany",
          "no": "Berlin, Tyskland",
          "se": "Berlin, Tyskland"
        }
      }
    },
    "death": {
      "date": "1959-06-09",
      "place": {
        "city": {
          "en": "G\u00f6ttingen",
          "no": "G\u00f6ttingen",
          "se": "G\u00f6ttingen"
        },
        "country": {
          "en": "West Germany",
          "no": "Vest-Tyskland",
          "se": "V\u00e4sttyskland"
        },
        "cityNow": {
          "en": "G\u00f6ttingen",
          "no": "G\u00f6ttingen",
          "se": "G\u00f6ttingen",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3033",
            "https://www.wikipedia.org/wiki/G%C3%B6ttingen"
          ]
        },
        "countryNow": {
          "en": "Germany",
          "no": "Tyskland",
          "se": "Tyskland",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q183"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "G\u00f6ttingen, West Germany (now Germany)",
          "no": "G\u00f6ttingen, Vest-Tyskland (n\u00e5 Tyskland)",
          "se": "G\u00f6ttingen, V\u00e4sttyskland (nu Tyskland)"
        }
      }
    },
    "wikipedia": {
      "slug": "Adolf_Otto_Reinhold_Windaus",
      "english": "https://en.wikipedia.org/wiki/Adolf_Otto_Reinhold_Windaus"
    },
    "wikidata": {
      "id": "Q77142",
      "url": "https://www.wikidata.org/wiki/Q77142"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q77142",
      "https://en.wikipedia.org/wiki/Adolf_Otto_Reinhold_Windaus"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/185",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/185",
        "title": "Adolf Windaus - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1928",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "1",
        "portion": "1",
        "prizeStatus": "received",
        "motivation": {
          "en": "for the services rendered through his research into the constitution of the sterols and their connection with the vitamins",
          "se": "f\u00f6r hans f\u00f6rtj\u00e4nster om utforskandet av sterinernas konstitution och deras samband med vitamingruppen"
        },
        "prizeAmount": 156939,
        "prizeAmountAdjusted": 4539342,
        "affiliations": [
          {
            "name": {
              "en": "Goettingen University",
              "no": "Goettingen University",
              "se": "Goettingen University"
            },
            "nameNow": {
              "en": "Goettingen University"
            },
            "city": {
              "en": "G\u00f6ttingen",
              "no": "G\u00f6ttingen",
              "se": "G\u00f6ttingen"
            },
            "country": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland"
            },
            "cityNow": {
              "en": "G\u00f6ttingen",
              "no": "G\u00f6ttingen",
              "se": "G\u00f6ttingen",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q3033",
                "https://www.wikipedia.org/wiki/G%C3%B6ttingen"
              ]
            },
            "countryNow": {
              "en": "Germany",
              "no": "Tyskland",
              "se": "Tyskland",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q183"
              ]
            },
            "locationString": {
              "en": "G\u00f6ttingen, Germany",
              "no": "G\u00f6ttingen, Tyskland",
              "se": "G\u00f6ttingen, Tyskland"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/1928",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1928/windaus/facts/",
            "title": "Adolf Windaus - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1928/summary/",
            "title": "The Nobel Prize in Chemistry 1928",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "541",
    "knownName": {
      "en": "Adolfo P\u00e9rez Esquivel",
      "se": "Adolfo P\u00e9rez Esquivel"
    },
    "givenName": {
      "en": "Adolfo",
      "se": "Adolfo"
    },
    "familyName": {
      "en": "P\u00e9rez Esquivel",
      "se": "P\u00e9rez Esquivel"
    },
    "fullName": {
      "en": "Adolfo P\u00e9rez Esquivel",
      "se": "Adolfo P\u00e9rez Esquivel"
    },
    "fileName": "esquivel",
    "gender": "male",
    "birth": {
      "date": "1931-11-26",
      "place": {
        "city": {
          "en": "Buenos Aires",
          "no": "Buenos Aires",
          "se": "Buenos Aires"
        },
        "country": {
          "en": "Argentina",
          "no": "Argentina",
          "se": "Argentina"
        },
        "cityNow": {
          "en": "Buenos Aires",
          "no": "Buenos Aires",
          "se": "Buenos Aires",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1486",
            "https://www.wikipedia.org/wiki/Buenos_Aires"
          ]
        },
        "countryNow": {
          "en": "Argentina",
          "no": "Argentina",
          "se": "Argentina",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q414"
          ]
        },
        "continent": {
          "en": "South America",
          "no": "S\u00f8r-Amerika",
          "se": "Sydamerika"
        },
        "locationString": {
          "en": "Buenos Aires, Argentina",
          "no": "Buenos Aires, Argentina",
          "se": "Buenos Aires, Argentina"
        }
      }
    },
    "wikipedia": {
      "slug": "Adolfo_P\u00e9rez_Esquivel",
      "english": "https://en.wikipedia.org/wiki/Adolfo_P\u00e9rez_Esquivel"
    },
    "wikidata": {
      "id": "Q206505",
      "url": "https://www.wikidata.org/wiki/Q206505"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q206505",
      "https://en.wikipedia.org/wiki/Adolfo_P\u00e9rez_Esquivel"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/541",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/541",
        "title": "Adolfo P\u00e9rez Esquivel - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1980",
        "category": {
          "en": "Peace",
          "no": "Fred",
          "se": "Fred"
        },
        "categoryFullName": {
          "en": "The Nobel Peace Prize",
          "no": "Nobels fredspris",
          "se": "Nobels fredspris"
        },
        "sortOrder": "1",
        "portion": "1",
        "dateAwarded": "1980-10-27",
        "prizeStatus": "received",
        "motivation": {
          "en": "for being a source of inspiration to repressed people, especially in Latin America",
          "no": "for rollen som inspirator for undertrykte mennesker, s\u00e6rlig i Latin-Amerika"
        },
        "prizeAmount": 880000,
        "prizeAmountAdjusted": 2942067,
        "residences": [
          {
            "country": {
              "en": "Argentina",
              "no": "Argentina",
              "se": "Argentina"
            },
            "countryNow": {
              "en": "Argentina",
              "no": "Argentina",
              "se": "Argentina"
            },
            "locationString": {
              "en": "Argentina",
              "no": "Argentina",
              "se": "Argentina"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/pea/1980",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/peace/1980/esquivel/facts/",
            "title": "Adolfo P\u00e9rez Esquivel - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/peace/1980/summary/",
            "title": "The Nobel Peace Prize 1980",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "292",
    "knownName": {
      "en": "Ahmed Zewail",
      "se": "Ahmed Zewail"
    },
    "givenName": {
      "en": "Ahmed",
      "se": "Ahmed"
    },
    "familyName": {
      "en": "Zewail",
      "se": "Zewail"
    },
    "fullName": {
      "en": "Ahmed H. Zewail",
      "se": "Ahmed H. Zewail"
    },
    "fileName": "zewail",
    "gender": "male",
    "birth": {
      "date": "1946-02-26",
      "place": {
        "city": {
          "en": "Damanhur",
          "no": "Damanhur",
          "se": "Damanhur"
        },
        "country": {
          "en": "Egypt",
          "no": "Egypt",
          "se": "Egypten"
        },
        "cityNow": {
          "en": "Damanhur",
          "no": "Damanhur",
          "se": "Damanhur",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q328153",
            "https://www.wikipedia.org/wiki/Damanhur"
          ]
        },
        "countryNow": {
          "en": "Egypt",
          "no": "Egypt",
          "se": "Egypten",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q79"
          ]
        },
        "continent": {
          "en": "Africa",
          "no": "Afrika",
          "se": "Afrika"
        },
        "locationString": {
          "en": "Damanhur, Egypt",
          "no": "Damanhur, Egypt",
          "se": "Damanhur, Egypten"
        }
      }
    },
    "death": {
      "date": "2016-08-02",
      "place": {
        "city": {
          "en": "Pasadena, CA",
          "no": "Pasadena, CA",
          "se": "Pasadena, CA"
        },
        "country": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": "https://www.wikidata.org/wiki/Q30"
        },
        "cityNow": {
          "en": "Pasadena, CA",
          "no": "Pasadena, CA",
          "se": "Pasadena, CA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q485176",
            "https://www.wikipedia.org/wiki/Pasadena,_California"
          ]
        },
        "countryNow": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q30"
          ]
        },
        "continent": {
          "en": "North America",
          "no": "Nord-Amerika",
          "se": "Nordamerika"
        },
        "locationString": {
          "en": "Pasadena, CA, USA",
          "no": "Pasadena, CA, USA",
          "se": "Pasadena, CA, USA"
        }
      }
    },
    "wikipedia": {
      "slug": "Ahmed_Zewail",
      "english": "https://en.wikipedia.org/wiki/Ahmed_Zewail"
    },
    "wikidata": {
      "id": "Q106624",
      "url": "https://www.wikidata.org/wiki/Q106624"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q106624",
      "https://en.wikipedia.org/wiki/Ahmed_Zewail"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/292",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/292",
        "title": "Ahmed Zewail - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1999",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "1",
        "portion": "1",
        "dateAwarded": "1999-10-12",
        "prizeStatus": "received",
        "motivation": {
          "en": "for his studies of the transition states of chemical reactions using femtosecond spectroscopy",
          "se": "f\u00f6r hans studier av kemiska reaktioners \u00f6verg\u00e5ngstillst\u00e5nd med femtosekundspektroskopi"
        },
        "prizeAmount": 7900000,
        "prizeAmountAdjusted": 10231411,
        "affiliations": [
          {
            "name": {
              "en": "California Institute of Technology (Caltech)",
              "no": "California Institute of Technology (Caltech)",
              "se": "California Institute of Technology (Caltech)"
            },
            "nameNow": {
              "en": "California Institute of Technology (Caltech)"
            },
            "city": {
              "en": "Pasadena, CA",
              "no": "Pasadena, CA",
              "se": "Pasadena, CA"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Pasadena, CA",
              "no": "Pasadena, CA",
              "se": "Pasadena, CA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q485176",
                "https://www.wikipedia.org/wiki/Pasadena,_California"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Pasadena, CA, USA",
              "no": "Pasadena, CA, USA",
              "se": "Pasadena, CA, USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/1999",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1999/zewail/facts/",
            "title": "Ahmed Zewail - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/1999/summary/",
            "title": "The Nobel Prize in Chemistry 1999",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "853",
    "knownName": {
      "en": "Akira Suzuki",
      "se": "Akira Suzuki"
    },
    "givenName": {
      "en": "Akira",
      "se": "Akira"
    },
    "familyName": {
      "en": "Suzuki",
      "se": "Suzuki"
    },
    "fullName": {
      "en": "Akira Suzuki",
      "se": "Akira Suzuki"
    },
    "fileName": "suzuki",
    "gender": "male",
    "birth": {
      "date": "1930-09-12",
      "place": {
        "city": {
          "en": "Mukawa",
          "no": "Mukawa",
          "se": "Mukawa"
        },
        "country": {
          "en": "Japan",
          "no": "Japan",
          "se": "Japan"
        },
        "cityNow": {
          "en": "Mukawa",
          "no": "Mukawa",
          "se": "Mukawa",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1187152",
            "https://www.wikipedia.org/wiki/Mukawa,_Hokkaido"
          ]
        },
        "countryNow": {
          "en": "Japan",
          "no": "Japan",
          "se": "Japan",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q17"
          ]
        },
        "continent": {
          "en": "Asia",
          "no": "Asia",
          "se": "Asien"
        },
        "locationString": {
          "en": "Mukawa, Japan",
          "no": "Mukawa, Japan",
          "se": "Mukawa, Japan"
        }
      }
    },
    "wikipedia": {
      "slug": "Akira_Suzuki_(chemist)",
      "english": "https://en.wikipedia.org/wiki/Akira_Suzuki_(chemist)"
    },
    "wikidata": {
      "id": "Q105949",
      "url": "https://www.wikidata.org/wiki/Q105949"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q105949",
      "https://en.wikipedia.org/wiki/Akira_Suzuki_(chemist)"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/853",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/853",
        "title": "Akira Suzuki - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2010",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "3",
        "portion": "1/3",
        "dateAwarded": "2010-10-06",
        "prizeStatus": "received",
        "motivation": {
          "en": "for palladium-catalyzed cross couplings in organic synthesis",
          "se": "f\u00f6r palladiumkatalyserade korskopplingar i organisk syntes"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 11015580,
        "affiliations": [
          {
            "name": {
              "en": "Hokkaido University",
              "no": "Hokkaido University",
              "se": "Hokkaido University"
            },
            "nameNow": {
              "en": "Hokkaido University"
            },
            "city": {
              "en": "Sapporo",
              "no": "Sapporo",
              "se": "Sapporo"
            },
            "country": {
              "en": "Japan",
              "no": "Japan",
              "se": "Japan"
            },
            "cityNow": {
              "en": "Sapporo",
              "no": "Sapporo",
              "se": "Sapporo",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q37951",
                "https://www.wikipedia.org/wiki/Sapporo"
              ]
            },
            "countryNow": {
              "en": "Japan",
              "no": "Japan",
              "se": "Japan",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q17"
              ]
            },
            "locationString": {
              "en": "Sapporo, Japan",
              "no": "Sapporo, Japan",
              "se": "Sapporo, Japan"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/2010",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2010/suzuki/facts/",
            "title": "Akira Suzuki - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2010/summary/",
            "title": "The Nobel Prize in Chemistry 2010",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "978",
    "knownName": {
      "en": "Akira Yoshino",
      "se": "Akira Yoshino"
    },
    "givenName": {
      "en": "Akira",
      "se": "Akira"
    },
    "familyName": {
      "en": "Yoshino",
      "se": "Yoshino"
    },
    "fullName": {
      "en": "Akira Yoshino",
      "se": "Akira Yoshino"
    },
    "fileName": "yoshino",
    "gender": "male",
    "birth": {
      "date": "1948-01-30",
      "place": {
        "city": {
          "en": "Suita",
          "no": "Suita",
          "se": "Suita"
        },
        "country": {
          "en": "Japan",
          "no": "Japan",
          "se": "Japan"
        },
        "cityNow": {
          "en": "Suita",
          "no": "Suita",
          "se": "Suita",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q653510",
            "https://www.wikipedia.org/wiki/Suita"
          ]
        },
        "countryNow": {
          "en": "Japan",
          "no": "Japan",
          "se": "Japan",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q17"
          ]
        },
        "continent": {
          "en": "Asia",
          "no": "Asia",
          "se": "Asien"
        },
        "locationString": {
          "en": "Suita, Japan",
          "no": "Suita, Japan",
          "se": "Suita, Japan"
        }
      }
    },
    "wikipedia": {
      "slug": "Akira_Yoshino",
      "english": "https://en.wikipedia.org/wiki/Akira_Yoshino"
    },
    "wikidata": {
      "id": "Q4701206",
      "url": "https://www.wikidata.org/wiki/Q4701206"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q4701206",
      "https://en.wikipedia.org/wiki/Akira_Yoshino"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/978",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/978",
        "title": "Akira Yoshino - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2019",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "3",
        "portion": "1/3",
        "dateAwarded": "2019-10-09",
        "prizeStatus": "received",
        "motivation": {
          "en": "for the development of lithium-ion batteries",
          "se": "f\u00f6r utveckling av litiumjonbatterier"
        },
        "prizeAmount": 9000000,
        "prizeAmountAdjusted": 9000000,
        "affiliations": [
          {
            "name": {
              "en": "Asahi Kasei Corporation",
              "no": "Asahi Kasei Corporation",
              "se": "Asahi Kasei Corporation"
            },
            "nameNow": {
              "en": "Asahi Kasei Corporation"
            },
            "city": {
              "en": "Tokyo",
              "no": "Tokyo",
              "se": "Tokyo"
            },
            "country": {
              "en": "Japan",
              "no": "Japan",
              "se": "Japan"
            },
            "cityNow": {
              "en": "Tokyo",
              "no": "Tokyo",
              "se": "Tokyo",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q1490",
                "https://www.wikipedia.org/wiki/Tokyo"
              ]
            },
            "countryNow": {
              "en": "Japan",
              "no": "Japan",
              "se": "Japan",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q17"
              ]
            },
            "locationString": {
              "en": "Tokyo, Japan",
              "no": "Tokyo, Japan",
              "se": "Tokyo, Japan"
            }
          },
          {
            "name": {
              "en": "Meijo University",
              "no": "Meijo University",
              "se": "Meijo University"
            },
            "nameNow": {
              "en": "Meijo University"
            },
            "city": {
              "en": "Nagoya",
              "no": "Nagoya",
              "se": "Nagoya"
            },
            "country": {
              "en": "Japan",
              "no": "Japan",
              "se": "Japan"
            },
            "cityNow": {
              "en": "Nagoya",
              "no": "Nagoya",
              "se": "Nagoya",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q11751",
                "https://www.wikipedia.org/wiki/Nagoya"
              ]
            },
            "countryNow": {
              "en": "Japan",
              "no": "Japan",
              "se": "Japan",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q17"
              ]
            },
            "locationString": {
              "en": "Nagoya, Japan",
              "no": "Nagoya, Japan",
              "se": "Nagoya, Japan"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/2019",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2019/yoshino/facts/",
            "title": "Akira Yoshino - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2019/summary/",
            "title": "The Nobel Prize in Chemistry 2019",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "819",
    "knownName": {
      "en": "Al Gore",
      "se": "Al Gore"
    },
    "givenName": {
      "en": "Al",
      "se": "Al"
    },
    "familyName": {
      "en": "Gore",
      "se": "Gore"
    },
    "fullName": {
      "en": "Albert Arnold (Al) Gore Jr.",
      "se": "Albert Arnold (Al) Gore Jr."
    },
    "fileName": "gore",
    "gender": "male",
    "birth": {
      "date": "1948-03-31",
      "place": {
        "city": {
          "en": "Washington, D.C.",
          "no": "Washington, D.C.",
          "se": "Washington, D.C."
        },
        "country": {
          "en": "USA",
          "no": "USA",
          "se": "USA"
        },
        "cityNow": {
          "en": "Washington, D.C.",
          "no": "Washington, D.C.",
          "se": "Washington, D.C.",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q61",
            "https://www.wikipedia.org/wiki/Washington,_D.C."
          ]
        },
        "countryNow": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q30"
          ]
        },
        "continent": {
          "en": "North America",
          "no": "Nord-Amerika",
          "se": "Nordamerika"
        },
        "locationString": {
          "en": "Washington, D.C., USA",
          "no": "Washington, D.C., USA",
          "se": "Washington, D.C., USA"
        }
      }
    },
    "wikipedia": {
      "slug": "Al_Gore",
      "english": "https://en.wikipedia.org/wiki/Al_Gore"
    },
    "wikidata": {
      "id": "Q19673",
      "url": "https://www.wikidata.org/wiki/Q19673"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q19673",
      "https://en.wikipedia.org/wiki/Al_Gore"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/819",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/819",
        "title": "Al Gore - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2007",
        "category": {
          "en": "Peace",
          "no": "Fred",
          "se": "Fred"
        },
        "categoryFullName": {
          "en": "The Nobel Peace Prize",
          "no": "Nobels fredspris",
          "se": "Nobels fredspris"
        },
        "sortOrder": "2",
        "portion": "1/2",
        "dateAwarded": "2007-10-12",
        "prizeStatus": "received",
        "motivation": {
          "en": "for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change",
          "no": "for deira innsats for \u00e5 skape og spreie st\u00f8rre kunnskap om menneskeskapte klimaendringar og for \u00e5 leggje grunnlag for dei tiltaka som krevst for \u00e5 motverke desse endringane"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 11506932,
        "residences": [
          {
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "locationString": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/pea/2007",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/peace/2007/gore/facts/",
            "title": "Al Gore - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/peace/2007/summary/",
            "title": "The Nobel Peace Prize 2007",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "1012",
    "knownName": {
      "en": "Alain Aspect",
      "se": "Alain Aspect"
    },
    "givenName": {
      "en": "Alain",
      "se": "Alain"
    },
    "familyName": {
      "en": "Aspect",
      "se": "Aspect"
    },
    "fullName": {
      "en": "Alain Aspect",
      "se": "Alain Aspect"
    },
    "fileName": "aspect",
    "gender": "male",
    "birth": {
      "date": "1947-06-15",
      "place": {
        "city": {
          "en": "Agen",
          "no": "Agen",
          "se": "Agen"
        },
        "country": {
          "en": "France",
          "no": "Frankrike",
          "se": "Frankrike"
        },
        "cityNow": {
          "en": "Agen",
          "no": "Agen",
          "se": "Agen",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q6625",
            "https://www.wikipedia.org/wiki/Agen"
          ]
        },
        "countryNow": {
          "en": "France",
          "no": "Frankrike",
          "se": "Frankrike",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q142"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Agen, France",
          "no": "Agen, Frankrike",
          "se": "Agen, Frankrike"
        }
      }
    },
    "wikipedia": {
      "slug": "Alain_Aspect",
      "english": "https://en.wikipedia.org/wiki/Alain_Aspect"
    },
    "wikidata": {
      "id": "Q364997",
      "url": "https://www.wikidata.org/wiki/Q364997"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q364997",
      "https://en.wikipedia.org/wiki/Alain_Aspect"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/1012",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/1012",
        "title": "Alain Aspect - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2022",
        "category": {
          "en": "Physics",
          "no": "Fysikk",
          "se": "Fysik"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Physics",
          "no": "Nobelprisen i fysikk",
          "se": "Nobelpriset i fysik"
        },
        "sortOrder": "1",
        "portion": "1/3",
        "dateAwarded": "2022-10-04",
        "prizeStatus": "received",
        "motivation": {
          "en": "for experiments with entangled photons, establishing the violation of Bell inequalities and  pioneering quantum information science",
          "se": "f\u00f6r experiment med sammanf\u00e4tade fotoner som p\u00e5visat brott mot Bell-olikheter och  banat v\u00e4g f\u00f6r kvantinformationsvetenskap"
        },
        "prizeAmount": 10000000,
        "prizeAmountAdjusted": 10000000,
        "affiliations": [
          {
            "name": {
              "en": "Institut d\u2019Optique Graduate School \u2013 Universit\u00e9 Paris-Saclay",
              "no": "Institut d\u2019Optique Graduate School \u2013 Universit\u00e9 Paris-Saclay",
              "se": "Institut d\u2019Optique Graduate School \u2013 Universit\u00e9 Paris-Saclay"
            },
            "nameNow": {
              "en": "Institut d\u2019Optique Graduate School \u2013 Universit\u00e9 Paris-Saclay"
            },
            "city": {
              "en": "Paris",
              "no": "Paris",
              "se": "Paris"
            },
            "country": {
              "en": "France",
              "no": "Frankrike",
              "se": "Frankrike"
            },
            "cityNow": {
              "en": "Paris",
              "no": "Paris",
              "se": "Paris",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q90",
                "https://www.wikipedia.org/wiki/Paris"
              ]
            },
            "countryNow": {
              "en": "France",
              "no": "Frankrike",
              "se": "Frankrike",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q142"
              ]
            },
            "locationString": {
              "en": "Paris, France",
              "no": "Paris, Frankrike",
              "se": "Paris, Frankrike"
            }
          },
          {
            "name": {
              "en": "\u00c9cole Polytechnique",
              "no": "\u00c9cole Polytechnique",
              "se": "\u00c9cole Polytechnique"
            },
            "nameNow": {
              "en": "\u00c9cole Polytechnique"
            },
            "city": {
              "en": "Palaiseau",
              "no": "Palaiseau",
              "se": "Palaiseau"
            },
            "country": {
              "en": "France",
              "no": "Frankrike",
              "se": "Frankrike"
            },
            "cityNow": {
              "en": "Palaiseau",
              "no": "Palaiseau",
              "se": "Palaiseau",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q205580",
                "https://www.wikipedia.org/wiki/Palaiseau"
              ]
            },
            "countryNow": {
              "en": "France",
              "no": "Frankrike",
              "se": "Frankrike",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q142"
              ]
            },
            "locationString": {
              "en": "Palaiseau, France",
              "no": "Palaiseau, Frankrike",
              "se": "Palaiseau, Frankrike"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/phy/2022",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/2022/aspect/facts/",
            "title": "Alain Aspect - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/2022/summary/",
            "title": "The Nobel Prize in Physics 2022",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "729",
    "knownName": {
      "en": "Alan Heeger",
      "se": "Alan Heeger"
    },
    "givenName": {
      "en": "Alan",
      "se": "Alan"
    },
    "familyName": {
      "en": "Heeger",
      "se": "Heeger"
    },
    "fullName": {
      "en": "Alan J. Heeger",
      "se": "Alan J. Heeger"
    },
    "fileName": "heeger",
    "gender": "male",
    "birth": {
      "date": "1936-01-22",
      "place": {
        "city": {
          "en": "Sioux City, IA",
          "no": "Sioux City, IA",
          "se": "Sioux City, IA"
        },
        "country": {
          "en": "USA",
          "no": "USA",
          "se": "USA"
        },
        "cityNow": {
          "en": "Sioux City, IA",
          "no": "Sioux City, IA",
          "se": "Sioux City, IA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q489255",
            "https://www.wikipedia.org/wiki/Sioux_City,_Iowa"
          ]
        },
        "countryNow": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q30"
          ]
        },
        "continent": {
          "en": "North America",
          "no": "Nord-Amerika",
          "se": "Nordamerika"
        },
        "locationString": {
          "en": "Sioux City, IA, USA",
          "no": "Sioux City, IA, USA",
          "se": "Sioux City, IA, USA"
        }
      }
    },
    "wikipedia": {
      "slug": "Alan_J._Heeger",
      "english": "https://en.wikipedia.org/wiki/Alan_J._Heeger"
    },
    "wikidata": {
      "id": "Q106751",
      "url": "https://www.wikidata.org/wiki/Q106751"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q106751",
      "https://en.wikipedia.org/wiki/Alan_J._Heeger"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/729",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/729",
        "title": "Alan Heeger - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2000",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "1",
        "portion": "1/3",
        "dateAwarded": "2000-10-10",
        "prizeStatus": "received",
        "motivation": {
          "en": "for the discovery and development of conductive polymers",
          "se": "f\u00f6r uppt\u00e4ckten och utvecklandet av ledande polymerer"
        },
        "prizeAmount": 9000000,
        "prizeAmountAdjusted": 11538617,
        "affiliations": [
          {
            "name": {
              "en": "University of California",
              "no": "University of California",
              "se": "University of California"
            },
            "nameNow": {
              "en": "University of California"
            },
            "city": {
              "en": "Santa Barbara, CA",
              "no": "Santa Barbara, CA",
              "se": "Santa Barbara, CA"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Santa Barbara, CA",
              "no": "Santa Barbara, CA",
              "se": "Santa Barbara, CA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q159288",
                "https://www.wikipedia.org/wiki/Santa_Barbara,_California"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Santa Barbara, CA, USA",
              "no": "Santa Barbara, CA, USA",
              "se": "Santa Barbara, CA, USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/2000",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2000/heeger/facts/",
            "title": "Alan Heeger - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2000/summary/",
            "title": "The Nobel Prize in Chemistry 2000",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "376",
    "knownName": {
      "en": "Alan Hodgkin",
      "se": "Alan Hodgkin"
    },
    "givenName": {
      "en": "Alan",
      "se": "Alan"
    },
    "familyName": {
      "en": "Hodgkin",
      "se": "Hodgkin"
    },
    "fullName": {
      "en": "Alan Lloyd Hodgkin",
      "se": "Alan Lloyd Hodgkin"
    },
    "fileName": "hodgkin",
    "gender": "male",
    "birth": {
      "date": "1914-02-05",
      "place": {
        "city": {
          "en": "Banbury",
          "no": "Banbury",
          "se": "Banbury"
        },
        "country": {
          "en": "United Kingdom",
          "no": "Storbritannia",
          "se": "Storbritannien"
        },
        "cityNow": {
          "en": "Banbury",
          "no": "Banbury",
          "se": "Banbury",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q806160",
            "https://www.wikipedia.org/wiki/Banbury"
          ]
        },
        "countryNow": {
          "en": "United Kingdom",
          "no": "Storbritannia",
          "se": "Storbritannien",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q145"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Banbury, United Kingdom",
          "no": "Banbury, Storbritannia",
          "se": "Banbury, Storbritannien"
        }
      }
    },
    "death": {
      "date": "1998-12-20",
      "place": {
        "city": {
          "en": "Cambridge",
          "no": "Cambridge",
          "se": "Cambridge"
        },
        "country": {
          "en": "United Kingdom",
          "no": "Storbritannia",
          "se": "Storbritannien",
          "sameAs": "https://www.wikidata.org/wiki/Q145"
        },
        "cityNow": {
          "en": "Cambridge",
          "no": "Cambridge",
          "se": "Cambridge",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q350",
            "https://www.wikipedia.org/wiki/Cambridge"
          ]
        },
        "countryNow": {
          "en": "United Kingdom",
          "no": "Storbritannia",
          "se": "Storbritannien",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q145"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Cambridge, United Kingdom",
          "no": "Cambridge, Storbritannia",
          "se": "Cambridge, Storbritannien"
        }
      }
    },
    "wikipedia": {
      "slug": "Alan_Lloyd_Hodgkin",
      "english": "https://en.wikipedia.org/wiki/Alan_Lloyd_Hodgkin"
    },
    "wikidata": {
      "id": "Q193650",
      "url": "https://www.wikidata.org/wiki/Q193650"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q193650",
      "https://en.wikipedia.org/wiki/Alan_Lloyd_Hodgkin"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/376",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/376",
        "title": "Alan Hodgkin - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1963",
        "category": {
          "en": "Physiology or Medicine",
          "no": "Fysiologi eller medisin",
          "se": "Fysiologi eller medicin"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Physiology or Medicine",
          "no": "Nobelprisen i fysiologi eller medisin",
          "se": "Nobelpriset i fysiologi eller medicin"
        },
        "sortOrder": "2",
        "portion": "1/3",
        "prizeStatus": "received",
        "motivation": {
          "en": "for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane",
          "se": "f\u00f6r deras uppt\u00e4ckter r\u00f6rande jonmekanismerna vid retning och h\u00e4mning i nervcellernas perifera och centrala membranavsnitt"
        },
        "prizeAmount": 265000,
        "prizeAmountAdjusted": 2890771,
        "affiliations": [
          {
            "name": {
              "en": "University of Cambridge",
              "no": "University of Cambridge",
              "se": "University of Cambridge"
            },
            "nameNow": {
              "en": "University of Cambridge"
            },
            "city": {
              "en": "Cambridge",
              "no": "Cambridge",
              "se": "Cambridge"
            },
            "country": {
              "en": "United Kingdom",
              "no": "Storbritannia",
              "se": "Storbritannien"
            },
            "cityNow": {
              "en": "Cambridge",
              "no": "Cambridge",
              "se": "Cambridge",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q350",
                "https://www.wikipedia.org/wiki/Cambridge"
              ]
            },
            "countryNow": {
              "en": "United Kingdom",
              "no": "Storbritannia",
              "se": "Storbritannien",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q145"
              ]
            },
            "locationString": {
              "en": "Cambridge, United Kingdom",
              "no": "Cambridge, Storbritannia",
              "se": "Cambridge, Storbritannien"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/med/1963",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/medicine/1963/hodgkin/facts/",
            "title": "Alan Hodgkin - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/medicine/1963/summary/",
            "title": "The Nobel Prize in Physiology or Medicine 1963",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "730",
    "knownName": {
      "en": "Alan MacDiarmid",
      "se": "Alan MacDiarmid"
    },
    "givenName": {
      "en": "Alan",
      "se": "Alan"
    },
    "familyName": {
      "en": "MacDiarmid",
      "se": "MacDiarmid"
    },
    "fullName": {
      "en": "Alan G. MacDiarmid",
      "se": "Alan G. MacDiarmid"
    },
    "fileName": "macdiarmid",
    "gender": "male",
    "birth": {
      "date": "1927-04-14",
      "place": {
        "city": {
          "en": "Masterton",
          "no": "Masterton",
          "se": "Masterton"
        },
        "country": {
          "en": "New Zealand",
          "no": "New Zealand",
          "se": "Nya Zeeland"
        },
        "cityNow": {
          "en": "Masterton",
          "no": "Masterton",
          "se": "Masterton",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1223916",
            "https://www.wikipedia.org/wiki/Masterton"
          ]
        },
        "countryNow": {
          "en": "New Zealand",
          "no": "New Zealand",
          "se": "Nya Zeeland",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q664"
          ]
        },
        "continent": {
          "en": "Oceania",
          "no": "Oseania",
          "se": "Oceanien"
        },
        "locationString": {
          "en": "Masterton, New Zealand",
          "no": "Masterton, New Zealand",
          "se": "Masterton, Nya Zeeland"
        }
      }
    },
    "death": {
      "date": "2007-02-07",
      "place": {
        "city": {
          "en": "Drexel Hill, PA",
          "no": "Drexel Hill, PA",
          "se": "Drexel Hill, PA"
        },
        "country": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": "https://www.wikidata.org/wiki/Q30"
        },
        "cityNow": {
          "en": "Drexel Hill, PA",
          "no": "Drexel Hill, PA",
          "se": "Drexel Hill, PA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1132763",
            "https://www.wikipedia.org/wiki/Drexel_Hill,_Pennsylvania"
          ]
        },
        "countryNow": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q30"
          ]
        },
        "continent": {
          "en": "North America",
          "no": "Nord-Amerika",
          "se": "Nordamerika"
        },
        "locationString": {
          "en": "Drexel Hill, PA, USA",
          "no": "Drexel Hill, PA, USA",
          "se": "Drexel Hill, PA, USA"
        }
      }
    },
    "wikipedia": {
      "slug": "Alan_MacDiarmid",
      "english": "https://en.wikipedia.org/wiki/Alan_MacDiarmid"
    },
    "wikidata": {
      "id": "Q110942",
      "url": "https://www.wikidata.org/wiki/Q110942"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q110942",
      "https://en.wikipedia.org/wiki/Alan_MacDiarmid"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/730",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/730",
        "title": "Alan MacDiarmid - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "2000",
        "category": {
          "en": "Chemistry",
          "no": "Kjemi",
          "se": "Kemi"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Chemistry",
          "no": "Nobelprisen i kjemi",
          "se": "Nobelpriset i kemi"
        },
        "sortOrder": "2",
        "portion": "1/3",
        "dateAwarded": "2000-10-10",
        "prizeStatus": "received",
        "motivation": {
          "en": "for the discovery and development of conductive polymers",
          "se": "f\u00f6r uppt\u00e4ckten och utvecklandet av ledande polymerer"
        },
        "prizeAmount": 9000000,
        "prizeAmountAdjusted": 11538617,
        "affiliations": [
          {
            "name": {
              "en": "University of Pennsylvania",
              "no": "University of Pennsylvania",
              "se": "University of Pennsylvania"
            },
            "nameNow": {
              "en": "University of Pennsylvania"
            },
            "city": {
              "en": "Philadelphia, PA",
              "no": "Philadelphia, PA",
              "se": "Philadelphia, PA"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Philadelphia, PA",
              "no": "Philadelphia, PA",
              "se": "Philadelphia, PA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q1345",
                "https://www.wikipedia.org/wiki/Philadelphia"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Philadelphia, PA, USA",
              "no": "Philadelphia, PA, USA",
              "se": "Philadelphia, PA, USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/che/2000",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2000/macdiarmid/facts/",
            "title": "Alan MacDiarmid - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/chemistry/2000/summary/",
            "title": "The Nobel Prize in Chemistry 2000",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "11",
    "knownName": {
      "en": "Albert A. Michelson",
      "se": "Albert A. Michelson"
    },
    "givenName": {
      "en": "Albert A.",
      "se": "Albert A."
    },
    "familyName": {
      "en": "Michelson",
      "se": "Michelson"
    },
    "fullName": {
      "en": "Albert Abraham Michelson",
      "se": "Albert Abraham Michelson"
    },
    "fileName": "michelson",
    "gender": "male",
    "birth": {
      "date": "1852-12-19",
      "place": {
        "city": {
          "en": "Strelno",
          "no": "Strelno",
          "se": "Strelno"
        },
        "country": {
          "en": "Prussia",
          "no": "Preussen",
          "se": "Preussen"
        },
        "cityNow": {
          "en": "Strzelno",
          "no": "Strzelno",
          "se": "Strzelno",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1005414",
            "https://www.wikipedia.org/wiki/Strzelno"
          ]
        },
        "countryNow": {
          "en": "Poland",
          "no": "Polen",
          "se": "Polen",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q36"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Strelno, Prussia (now Strzelno, Poland)",
          "no": "Strelno, Preussen (n\u00e5 Strzelno, Polen)",
          "se": "Strelno, Preussen (nu Strzelno, Polen)"
        }
      }
    },
    "death": {
      "date": "1931-05-09",
      "place": {
        "city": {
          "en": "Pasadena, CA",
          "no": "Pasadena, CA",
          "se": "Pasadena, CA"
        },
        "country": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": "https://www.wikidata.org/wiki/Q30"
        },
        "cityNow": {
          "en": "Pasadena, CA",
          "no": "Pasadena, CA",
          "se": "Pasadena, CA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q485176",
            "https://www.wikipedia.org/wiki/Pasadena,_California"
          ]
        },
        "countryNow": {
          "en": "USA",
          "no": "USA",
          "se": "USA",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q30"
          ]
        },
        "continent": {
          "en": "North America",
          "no": "Nord-Amerika",
          "se": "Nordamerika"
        },
        "locationString": {
          "en": "Pasadena, CA, USA",
          "no": "Pasadena, CA, USA",
          "se": "Pasadena, CA, USA"
        }
      }
    },
    "wikipedia": {
      "slug": "Albert_Abraham_Michelson",
      "english": "https://en.wikipedia.org/wiki/Albert_Abraham_Michelson"
    },
    "wikidata": {
      "id": "Q127234",
      "url": "https://www.wikidata.org/wiki/Q127234"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q127234",
      "https://en.wikipedia.org/wiki/Albert_Abraham_Michelson"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/11",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/11",
        "title": "Albert A. Michelson - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1907",
        "category": {
          "en": "Physics",
          "no": "Fysikk",
          "se": "Fysik"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Physics",
          "no": "Nobelprisen i fysikk",
          "se": "Nobelpriset i fysik"
        },
        "sortOrder": "1",
        "portion": "1",
        "prizeStatus": "received",
        "motivation": {
          "en": "for his optical precision instruments and the spectroscopic and metrological investigations carried out with their aid",
          "se": "f\u00f6r hans optiska precisionsinstrument och hans d\u00e4rmed utf\u00f6rda spektroskopiska och metrologiska unders\u00f6kningar"
        },
        "prizeAmount": 138796,
        "prizeAmountAdjusted": 7161123,
        "affiliations": [
          {
            "name": {
              "en": "University of Chicago",
              "no": "University of Chicago",
              "se": "University of Chicago"
            },
            "nameNow": {
              "en": "University of Chicago"
            },
            "city": {
              "en": "Chicago, IL",
              "no": "Chicago, IL",
              "se": "Chicago, IL"
            },
            "country": {
              "en": "USA",
              "no": "USA",
              "se": "USA"
            },
            "cityNow": {
              "en": "Chicago, IL",
              "no": "Chicago, IL",
              "se": "Chicago, IL",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q1297",
                "https://www.wikipedia.org/wiki/Chicago"
              ]
            },
            "countryNow": {
              "en": "USA",
              "no": "USA",
              "se": "USA",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q30"
              ]
            },
            "locationString": {
              "en": "Chicago, IL, USA",
              "no": "Chicago, IL, USA",
              "se": "Chicago, IL, USA"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/phy/1907",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/1907/michelson/facts/",
            "title": "Albert A. Michelson - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/physics/1907/summary/",
            "title": "The Nobel Prize in Physics 1907",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "628",
    "knownName": {
      "en": "Albert Camus",
      "se": "Albert Camus"
    },
    "givenName": {
      "en": "Albert",
      "se": "Albert"
    },
    "familyName": {
      "en": "Camus",
      "se": "Camus"
    },
    "fullName": {
      "en": "Albert Camus",
      "se": "Albert Camus"
    },
    "fileName": "camus",
    "gender": "male",
    "birth": {
      "date": "1913-11-07",
      "place": {
        "city": {
          "en": "Mondovi",
          "no": "Mondovi",
          "se": "Mondovi"
        },
        "country": {
          "en": "French Algeria",
          "no": "fransk Algerie",
          "se": "Franska Algeriet"
        },
        "cityNow": {
          "en": "Mondovi",
          "no": "Mondovi",
          "se": "Mondovi",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1924629",
            "https://www.wikipedia.org/wiki/Dr%C3%A9an"
          ]
        },
        "countryNow": {
          "en": "Algeria",
          "no": "Algerie",
          "se": "Algeriet",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q262"
          ]
        },
        "continent": {
          "en": "Africa",
          "no": "Afrika",
          "se": "Afrika"
        },
        "locationString": {
          "en": "Mondovi, French Algeria (now Algeria)",
          "no": "Mondovi, fransk Algerie (n\u00e5 Algerie)",
          "se": "Mondovi, Franska Algeriet (nu Algeriet)"
        }
      }
    },
    "death": {
      "date": "1960-01-04",
      "place": {
        "city": {
          "en": "Sens",
          "no": "Sens",
          "se": "Sens"
        },
        "country": {
          "en": "France",
          "no": "Frankrike",
          "se": "Frankrike",
          "sameAs": "https://www.wikidata.org/wiki/Q142"
        },
        "cityNow": {
          "en": "Sens",
          "no": "Sens",
          "se": "Sens",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q212420",
            "https://www.wikipedia.org/wiki/Sens"
          ]
        },
        "countryNow": {
          "en": "France",
          "no": "Frankrike",
          "se": "Frankrike",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q142"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Sens, France",
          "no": "Sens, Frankrike",
          "se": "Sens, Frankrike"
        }
      }
    },
    "wikipedia": {
      "slug": "Albert_Camus",
      "english": "https://en.wikipedia.org/wiki/Albert_Camus"
    },
    "wikidata": {
      "id": "Q34670",
      "url": "https://www.wikidata.org/wiki/Q34670"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q34670",
      "https://en.wikipedia.org/wiki/Albert_Camus"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/628",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/628",
        "title": "Albert Camus - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1957",
        "category": {
          "en": "Literature",
          "no": "Litteratur",
          "se": "Litteratur"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Literature",
          "no": "Nobelprisen i litteratur",
          "se": "Nobelpriset i litteratur"
        },
        "sortOrder": "1",
        "portion": "1",
        "prizeStatus": "received",
        "motivation": {
          "en": "for his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times",
          "se": "f\u00f6r hans betydelsefulla f\u00f6rfattarskap, som med skarpsynt allvar belyser m\u00e4nskliga samvetsproblem i v\u00e5r tid"
        },
        "prizeAmount": 208629,
        "prizeAmountAdjusted": 2746709,
        "residences": [
          {
            "country": {
              "en": "France",
              "no": "Frankrike",
              "se": "Frankrike"
            },
            "countryNow": {
              "en": "France",
              "no": "Frankrike",
              "se": "Frankrike"
            },
            "locationString": {
              "en": "France",
              "no": "Frankrike",
              "se": "Frankrike"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/lit/1957",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/literature/1957/camus/facts/",
            "title": "Albert Camus - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/literature/1957/summary/",
            "title": "The Nobel Prize in Literature 1957",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "403",
    "knownName": {
      "en": "Albert Claude",
      "se": "Albert Claude"
    },
    "givenName": {
      "en": "Albert",
      "se": "Albert"
    },
    "familyName": {
      "en": "Claude",
      "se": "Claude"
    },
    "fullName": {
      "en": "Albert Claude",
      "se": "Albert Claude"
    },
    "fileName": "claude",
    "gender": "male",
    "birth": {
      "date": "1898-08-24",
      "place": {
        "city": {
          "en": "Longlier",
          "no": "Longlier",
          "se": "Longlier"
        },
        "country": {
          "en": "Belgium",
          "no": "Belgia",
          "se": "Belgien"
        },
        "cityNow": {
          "en": "Longlier",
          "no": "Longlier",
          "se": "Longlier"
        },
        "countryNow": {
          "en": "Belgium",
          "no": "Belgia",
          "se": "Belgien",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q31"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Longlier, Belgium",
          "no": "Longlier, Belgia",
          "se": "Longlier, Belgien"
        }
      }
    },
    "death": {
      "date": "1983-05-22",
      "place": {
        "city": {
          "en": "Brussels",
          "no": "Brussel",
          "se": "Bryssel"
        },
        "country": {
          "en": "Belgium",
          "no": "Belgia",
          "se": "Belgien",
          "sameAs": "https://www.wikidata.org/wiki/Q31"
        },
        "cityNow": {
          "en": "Brussels",
          "no": "Brussel",
          "se": "Bryssel",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q239",
            "https://www.wikipedia.org/wiki/City_of_Brussels"
          ]
        },
        "countryNow": {
          "en": "Belgium",
          "no": "Belgia",
          "se": "Belgien",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q31"
          ]
        },
        "continent": {
          "en": "Europe",
          "no": "Europa",
          "se": "Europa"
        },
        "locationString": {
          "en": "Brussels, Belgium",
          "no": "Brussel, Belgia",
          "se": "Bryssel, Belgien"
        }
      }
    },
    "wikipedia": {
      "slug": "Albert_Claude",
      "english": "https://en.wikipedia.org/wiki/Albert_Claude"
    },
    "wikidata": {
      "id": "Q233943",
      "url": "https://www.wikidata.org/wiki/Q233943"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q233943",
      "https://en.wikipedia.org/wiki/Albert_Claude"
    ],
    "links": [
      {
        "rel": "laureate",
        "href": "https://api.nobelprize.org/2/laureate/403",
        "action": "GET",
        "types": "application/json"
      },
      {
        "rel": "external",
        "href": "https://www.nobelprize.org/laureate/403",
        "title": "Albert Claude - Facts",
        "action": "GET",
        "types": "text/html",
        "class": [
          "laureate facts"
        ]
      }
    ],
    "nobelPrizes": [
      {
        "awardYear": "1974",
        "category": {
          "en": "Physiology or Medicine",
          "no": "Fysiologi eller medisin",
          "se": "Fysiologi eller medicin"
        },
        "categoryFullName": {
          "en": "The Nobel Prize in Physiology or Medicine",
          "no": "Nobelprisen i fysiologi eller medisin",
          "se": "Nobelpriset i fysiologi eller medicin"
        },
        "sortOrder": "1",
        "portion": "1/3",
        "prizeStatus": "received",
        "motivation": {
          "en": "for their discoveries concerning the structural and functional organization of the cell",
          "se": "f\u00f6r deras uppt\u00e4ckter r\u00f6rande cellens strukturella och funktionella organisation"
        },
        "prizeAmount": 550000,
        "prizeAmountAdjusted": 3322627,
        "affiliations": [
          {
            "name": {
              "en": "Universit\u00e9 Catholique de Louvain",
              "no": "Universit\u00e9 Catholique de Louvain",
              "se": "Universit\u00e9 Catholique de Louvain"
            },
            "nameNow": {
              "en": "Universit\u00e9 Catholique de Louvain"
            },
            "city": {
              "en": "Louvain",
              "no": "Louvain",
              "se": "Louvain"
            },
            "country": {
              "en": "Belgium",
              "no": "Belgia",
              "se": "Belgien"
            },
            "cityNow": {
              "en": "Louvain",
              "no": "Louvain",
              "se": "Louvain",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q118958",
                "https://www.wikipedia.org/wiki/Leuven"
              ]
            },
            "countryNow": {
              "en": "Belgium",
              "no": "Belgia",
              "se": "Belgien",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q31"
              ]
            },
            "locationString": {
              "en": "Louvain, Belgium",
              "no": "Louvain, Belgia",
              "se": "Louvain, Belgien"
            }
          }
        ],
        "links": [
          {
            "rel": "nobelPrize",
            "href": "https://api.nobelprize.org/2/nobelPrize/med/1974",
            "action": "GET",
            "types": "application/json"
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/medicine/1974/claude/facts/",
            "title": "Albert Claude - Facts",
            "action": "GET",
            "types": "text/html",
            "class": [
              "laureate facts"
            ]
          },
          {
            "rel": "external",
            "href": "https://www.nobelprize.org/prizes/medicine/1974/summary/",
            "title": "The Nobel Prize in Physiology or Medicine 1974",
            "action": "GET",
            "types": "text/html",
            "class": [
              "prize summary"
            ]
          }
        ]
      }
    ]
  }
]
