### Outstanding:

1. Figure out format for profile.
   - All house members within the same object? **OR**
   - Each and every character is contained w/i their own object?
   - Where & how should I store the hard-coded profiles?
1. Write more TDD-style tests.
   - Reference **tdd-bdd-challenge**
1. Write SHOW, NEW, CREATE routes for profiles.
1. Write .handlebars files for the above.
1. Implement user authentication
   - Reference **reddit.js**
   - .env, .gitignore
   - **_Alter NEW & CREATE routes to require user be auth'd_**
1. Write INDEX, DELETE, EDIT routes for profiles.
1. Put in buttons and links and stuff.
1. Design! (LAST PRIORITY. FUNCTIONALITY MATTERS MORE. [OBVIOUSLY.])

### Endpoints:

- '/' : root route (landing page)
- '/profiles' : index. see all existing character profiles
- '/profiles/new' : form to make a new profile for a character
- '/profiles/:id' : show a single character profile
- '/profiles/:id/edit' : edit an existing character profile
