# 🔥 A Song of Ice and Fire (ASOIAF) Characters API 🐉

### 🔎 Overview

Despite the universally acknowledged travesty that was Season 8 of Home Box Office's Game of Thrones, beloved characters from the once-acclaimed franchise remain firmly fixed in the hearts and minds of Westeros enthusiasts. Rewatching the show may still be a bitter pill to swallow, but author George RR Martin still plans on releasing two more installments in its foundational series, _A Song of Ice and Fire_ (hereafter referred to "ASOIAF").

This REST API is a tool for storing and referencing data on ASOIAF's sprawling cast of characters. It was built using JavaScript, Node, Express, and Test-Driven Development.

### 🔎 Endpoints

Currently, this API has one resource: **Profiles**, with each Profile containing data on a single character from ASOIAF.

## Auth

* <b>Sign Up</b> at ```http://localhost:3000/sign-up``` with parameters for <b>Username</b> and <b>Password</b>
* <b>Log In</b> at ```http://localhost:3000/login```
* <b>Log Out</b> at ```http://localhost:3000/logout```

## CREATE a new Profile

```http://localhost:3000/profiles/new```

Pass in parameters for NAME, AKA (_as in nicknames_), HOUSE, ALLIES, AGAINST (_as in enemies_), and STATUS (_as in alive or dead_).

## READ the indexed Profiles

```http://localhost:3000/profiles```

View all existing profiles in the database.

## READ a single Profile

```http://localhost:3000/profiles/:id```

View a single profile based on that profile's ID.

## UPDATE a Profile's data

```http://localhost:3000/profiles/:id/edit```

Tweak a profile's data, using the ```:id``` parameter to track it down.

## DELETE a Profile

```http://localhost:3000/profiles/:id/delete```

Destroy that profile.