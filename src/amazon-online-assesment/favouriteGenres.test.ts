/**

Given a map Map<String, List<String>> userSongs with user names as keys and a list of all the songs that the user has listened to as values.

Also given a map Map<String, List<String>> songGenres, with song genre as keys and a list of all the songs within that genre as values. \
The song can only belong to only one genre.

The task is to return a map Map<String, List<String>>, where the key is a user name and the value is a list of the user's favorite genre(s). 
Favorite genre is the most listened to genre. A user can have more than one favorite genre if he/she has listened to the same number of songs per each of the genres.

Example 1:

Input:
userSongs = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.

Input:
userSongs = {  
   "David": ["song1", "song2"],
   "Emma":  ["song3", "song4"]
},
songGenres = {}

Output: {  
   "David": [],
   "Emma":  []
}
*/

/**
 * Build a map for every song
{
	"song1": "Rock",
	"song2": "techno",
	etc....
}

build the user map of songs
{
	david: [{"rock", 2}, {"techno", 2}, ...etc]
}


userSongs = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}
 */

function favouriteGenres(
  userSongs: { [type: string]: string[] },
  songGenres: { [type: string]: string[] }
): { [type: string]: string[] } {
  let result: { [key: string]: string[] } = {};

  const songWithGenre = new Map<string, string>();
  for (let [key, value] of Object.entries(songGenres)) {
    value.forEach((song) => songWithGenre.set(song, key));
  }
  console.log(songWithGenre);

  for (let [user, songs] of Object.entries(userSongs)) {
    const map = new Map<string, number>();
    songs.forEach((song) => {
      const genre: string = songWithGenre.get(song)!;
      const count = map.get(genre) || 0;
      map.set(genre, count + 1);
    });
    let counts: [number, string][] = [];
    for (let [genre, count] of map.entries()) {
      if (genre) counts.push([count, genre]);
    }
    counts.sort((a, b) => b[0] - a[0]);
    if (counts.length === 0) {
      result[user] = [];
      continue;
    }
    let max = counts[0][0];
    const filtered = counts.filter((c) => c[0] === max);
    const mapped = filtered.map((f) => f[1]);
    result[user] = mapped.length ? mapped : [];
    console.log(user, filtered);
  }

  return result;
}

describe("favourite Genres", () => {
  test("should work with example", () => {
    const userSongs = {
      David: ["song8", "song1", "song2", "song3", "song4"],
      Emma: ["song5", "song6", "song7"],
    };
    const songGenres = {
      Rock: ["song1", "song3"],
      Dubstep: ["song7"],
      Techno: ["song2", "song4"],
      Pop: ["song5", "song6"],
      Jazz: ["song8", "song9"],
    };

    const result = {
      David: ["Rock", "Techno"],
      Emma: ["Pop"],
    };

    expect(favouriteGenres(userSongs, songGenres)).toEqual(result);
  });

  test("should work with example 2", () => {
    const userSongs = {
      David: ["song1", "song2", "song3", "song4", "song8"],
      Emma: ["song5", "song6", "song7"],
    };
    const songGenres = {};

    const result = {
      David: [],
      Emma: [],
    };

    expect(favouriteGenres(userSongs, songGenres)).toEqual(result);
  });
});
