const getFormatFromDate = (date: Date): string => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:00`
}
const index = async (date: Date) => {
  const from = getFormatFromDate(date);
  date.setHours(date.getHours() + 1);
  const to = getFormatFromDate(date);
  const query = `query getCandidates($getCandidateRequestDto: GetCandidateRequestDto!) {
  getCandidates(GetCandidateRequestDto: $getCandidateRequestDto) {
    pagination {
      total
    }
  }
}`
  const variables = {
    "getCandidateRequestDto": {
      "syncOption": {
        fromDate: from,
        toDate: to
      }
    }
  }
  const url = 'https://chorus-test.one-line.com/trm/bff/graphql'
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie: '__Host-next-auth.csrf-token=f59af01917b0f17e670d4057502c95c1b0a084faea0910052b5bd29f8119f44f%7C82ca58b336589d04205cabc31b8d70f1268640269c5f515c6006d0cd84bcc977; __Secure-next-auth.callback-url=https%3A%2F%2Fchorus-test.one-line.com%2Fchorus%2F; is_human=true; user_id=minh.huynh.tpv%40one-line.com; __Secure-next-auth.session-token=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWluaC5odXluaC50cHZAb25lLWxpbmUuY29tIiwiZW1haWwiOiJtaW5oLmh1eW5oLnRwdkBvbmUtbGluZS5jb20iLCJzdWIiOiJtaW5oLmh1eW5oLnRwdkBvbmUtbGluZS5jb20iLCJ1c2VyIjp7ImZpcnN0bmFtZSI6IkVyaWMgKE1pbmgpIiwibGFzdG5hbWUiOiJIdXluaCBUUFYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Im1pbmguaHV5bmgudHB2QG9uZS1saW5lLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im1pbmguaHV5bmgudHB2QG9uZS1saW5lLmNvbSJ9fQ.OSzkgV8dfDI7lTQe1iWPpzAed4NJ9vmdyC8Py060lfKnYytMI3bTLjPsAW9nUA0mn-DCZ0IzC8QRpKunjlJoi_nCXoFMduqUiB180ce1wuv64AjXOu0FkB07U97ktnCGkxNLMlI3G8N0xK-l8PZAt3JRQ420u5zLWJ9UGFhntRPuXmivNeQ_HBpFzwcn5CE8w9F9DQ24CeaWWgvph79jq2wz62JTaqzMEOFWJKPaT-2butbRM3ENQ1XhrRqsGyauXu8OhhniepFKgC3zHhh9v6pxzkDM58UHbrLLTOw8wFRDnf3KlQ6b3iEDi-YT4Y52pWoIIKTiR9KsB2odZN0ANgXSEXs06F3ErbwZB5nM_7RrTz8uLCGfixis2uLFOYmpXjLpkxYyNb4gfz-3bYYTYNK3W0EQda9aBzWoNOti5kPT4aRdFNFaNqmULcPlIKBf2AS0TGH-Ii3SPuhA9Wc9kUVIjKGVLNTN29LidxlONdaECPf2yYQoUUjuEPG7iFOr'
    },
    body: JSON.stringify({
      variables,
      query
    })
  })
  const data = await res.json() as { data: any };
  if (data) {
    console.log((data?.data?.getCandidates?.pagination?.total))
  }
  //date.setDate(date.getDate() - 1);
  //date.setMonth(date.getMonth() - 1);
  date.setHours(date.getHours() - 2);
  console.log(from, to)
  return index(date);
}

const date = new Date();

index(date).then().catch(err => console.log(err))

process.stdin.resume();
