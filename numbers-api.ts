// Bring meaning to your metrics and stories to your dates with our API of interesting number facts.

namespace placeholder {

type number = (_: {
// number is an integer; or the keyword **random**, for which we will try to return a random available fact; or a day of year in the form month/day (eg. 2/29, 1/09, 04/1), if type is date; or ranges of numbers. To get facts about multiple numbers in one request, specify ranges. A number range (inclusive) is specified as **min..max**. Separate multiple ranges and individual numbers with , (a comma).
number: string,
// Number Type
type: ('trivia'|'math'|'date'|'year'), // default: trivia
json: string, // default: json
// Return the fact as a sentence fragment that can be easily included as part of a larger sentence. This means that the first word is lowercase and ending punctuation is omitted. For trivia and math, a noun phrase is returned that can be used in a sentence like 'We now have more users than [fact as fragment]!'.
fragment?: string, // default: 1
// The notfound field tells us what to do if the number is not found. You can give us: **default** to return one of our pre-written missing messages, or a message you supply with the default query field. This is the default behaviour. **floor** to round down to the largest number that does have an associated fact, and return that fact. **ceil**, which is like floor but rounds up to the smallest number that has an associated fact.
notfound?: ('default'|'floor'|'ceil'),
// The value of the `default` query field tells us what to return if we don't have a fact for the requested number.
default?: string,
// Restrict the range of values returned to the inclusive range [**min**, **max**] when random is given as the number.
min?: integer,
// Restrict the range of values returned to the inclusive range [**min**, **max**] when random is given as the number.
max?: integer,
}) => any;

} // namespace placeholder

************ Response from plugin tool: ************
{
  "text": "the number of appendages on most starfish, which exhibit pentamerism",
  "number": 5,
  "found": true,
  "type": "trivia"
}
