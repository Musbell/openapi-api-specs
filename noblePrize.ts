// Information about the Nobel Prizes and the Nobel Prize Laureates

namespace placeholder {

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
// Language of output if format is csv (Default = en)
csvLang?: string,
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
// Text in Laureate's motivation
motivation?: string,
// Affiliation(s) for the Laureate at the time of the award
affiliation?: string,
// Laureate's place of residence at the time is awarded
residence?: string,
// Birth date of Laureate if Person. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
birthDate?: integer,
// Return Laureates born within a range of years between birthDate and birthDateTo. BirthDate field is required
birthDateTo?: string,
// Death date of Laureate if Person. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
deathDate?: string,
// Return Laureates deceased within a range of years between deathDate and deathhDateTo. DeathDate field is required
deathDateTo?: integer,
// Founding date of Laureate if Organization. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
foundedDate?: string,
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
// City where organization was founded
foundedCity?: string,
// Country where organization was founded
foundedCountry?: string,
// Continent where organization was founded. Continent as in geonames.org standard
foundedContinent?: string,
// City where organization's hearquarters are
HeadquartersCity?: string,
// Country where organization's hearquarters are
HeadquartersCountry?: string,
// Continent where organization's hearquarters are. Continent as in geonames.org standard
HeadquartersContinent?: string,
// The year the Nobel Prize was awarded, in the form of YYYY
nobelPrizeYear?: integer,
// Used in combination with nobelPrizeYear to specify a range of years between nobelPrizeYear and YearTo. nobelPrizeYear is required
yearTo?: integer,
// Nobel Prize category.
nobelPrizeCategory?: string,
// Output format (Default = json).
format?: string,
// Language if output format is csv (default = en).
csvLang?: string,
}) => any;

// Obtain information about an specific Nobel Prize Laureate. Used as unique identifier.
type laureate = (_: {
// Numeric Laureate's ID. Unique key.
laureateID: integer,
}) => any;

} // namespace placeholder
Unable to find recipient placeholder.number
