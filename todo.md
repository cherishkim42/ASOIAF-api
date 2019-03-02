### Outstanding:

1. Write SHOW, NEW, CREATE routes for profiles.
1. Write .handlebars files for the above.
1. Implement user authentication
   1. **_Alter NEW & CREATE routes to require user be auth'd_**
1. Write Auth tests
1. Write Auth routes
1. Write INDEX, DELETE, EDIT routes for profiles.
1. Put in buttons and links and stuff.
1. Design! (LAST PRIORITY. FUNCTIONALITY MATTERS MORE.)

### Ideas:

- Warning pop-up right before user deletes a profile

### Endpoints:

- '/' : root route (landing page)
- '/profiles' : index. see all existing character profiles
- '/profiles/new' : form to make a new profile for a character
- '/profiles/:id' : show a single character profile
- '/profiles/:id/edit' : edit an existing character profile
