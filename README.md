[![Codacy Badge](https://app.codacy.com/project/badge/Grade/077a6968d8a84accad5c083635d0991b)](https://www.codacy.com/gh/CJMaxwell/talentql-backend-pipeline/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CJMaxwell/talentql-backend-pipeline&amp;utm_campaign=Badge_Grade)
# Backend Assessment

Build and deploy a very simple API that does the following

1.  Calculate and return the age of a person, given their date of birth (dob) as query parameters to `GET /howold`

2.  Limit calls to `GET /howold` and prevent excessive usage from potentially ill-configured or malicious integrators. Only allow a maximum of 3 calls per second for each API client/caller

See full details and instructions in this [Google Doc](https://docs.google.com/document/d/1ma5vKz0j34gwI9WYrZddMM1ENlQddGOVFJ5qdSq2QlQ)