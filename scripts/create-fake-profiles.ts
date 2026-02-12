import { createClient } from "@supabase/supabase-js";
import { faker } from "@faker-js/faker";
import "dotenv/config";

// ----- Configuration -------
const SUPABASE_URL = "https://bvnztdunkjtbbzjzlxrm.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bnp0ZHVua2p0YmJ6anpseHJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDcyNDgxNCwiZXhwIjoyMDg2MzAwODE0fQ.lyH7sXBIF0rCCFlNZtNS0u00Pv14E1_WeAE-hL7nq60";
const PASSWORD = "password";

// ----- Intitialize Supabase client with service role key -------
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// ------ Fake profile data -------

const fakeProfiles = [
  {
    full_name: "Sarah Johnson",
    username: "sarah_j",
    email: "sarah.johnson@example.com",
    gender: "female" as const,
    birthdate: "1995-03-15",
    bio: "Love hiking, coffee, and good conversations. Looking for someone to explore the world with! 🌍",
    avatar_url: " ",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Alex Chen",
    username: "alex_c",
    email: "alex.chen@example.com",
    gender: "female" as const,
    birthdate: "1992-07-22",
    bio: "Passionate about photography and travel. Always up for an adventure! 📸✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 28, max: 38 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Emma Wilson",
    username: "emma_w",
    email: "emma.wilson@example.com",
    gender: "female" as const,
    birthdate: "1990-11-08",
    bio: "Book lover and yoga enthusiast. Seeking someone who values personal growth and meaningful conversations. 📚🧘‍♀️",
    avatar_url:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 30, max: 40 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Michael Rodriguez",
    username: "mike_r",
    email: "michael.rodriguez@example.com",
    gender: "male" as const,
    birthdate: "1988-05-12",
    bio: "Tech enthusiast and fitness lover. Looking for someone to share adventures and good food with! 💻🏋️‍♂️",
    avatar_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Jessica Kim",
    username: "jess_k",
    email: "jessica.kim@example.com",
    gender: "female" as const,
    birthdate: "1993-09-18",
    bio: "Artist and coffee addict. Love exploring new places and meeting interesting people. 🎨☕",
    avatar_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 35,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "David Thompson",
    username: "dave_t",
    email: "david.thompson@example.com",
    gender: "male" as const,
    birthdate: "1989-12-03",
    bio: "Musician and outdoor enthusiast. Guitar, hiking, and good vibes only! 🎸🏔️",
    avatar_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Sophie Martin",
    username: "sophie_m",
    email: "sophie.martin@example.com",
    gender: "female" as const,
    birthdate: "1994-02-28",
    bio: "Foodie and travel blogger. Always on the hunt for the best restaurants and hidden gems! 🍕✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Ryan Park",
    username: "ryan_p",
    email: "ryan.park@example.com",
    gender: "male" as const,
    birthdate: "1991-06-14",
    bio: "Entrepreneur and fitness coach. Passionate about helping others achieve their goals! 💪🚀",
    avatar_url:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Isabella Garcia",
    username: "bella_g",
    email: "isabella.garcia@example.com",
    gender: "female" as const,
    birthdate: "1996-08-07",
    bio: "Dance instructor and fitness enthusiast. Love spreading positivity and good energy! 💃✨",
    avatar_url:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "James Anderson",
    username: "james_a",
    email: "james.anderson@example.com",
    gender: "male" as const,
    birthdate: "1987-04-25",
    bio: "Software engineer and board game enthusiast. Looking for someone to share nerdy adventures with! 👨‍💻🎲",
    avatar_url:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  // ------------- My friends here -------------
  {
    full_name: "Andrey Pashchenko",
    username: "StanAndress",
    email: "andreyPashencko@example.com",
    gender: "male" as const,
    birthdate: "2005-09-15",
    bio: "Athlete, weightlifter, powerlifter, electrician. I do watering",
    avatar_url:
      "https://sun9-64.vkuserphoto.ru/s/v1/ig2/rEic8Xf8um72JrSHfb-wMei57U5OBDRTrFObhrFAcIf02-3Twy5ZWW6rOWYrglVjtzoyXQixGkicPte9siSrNiSV.jpg?quality=95&as=32x46,48x69,72x103,108x155,160x230,240x345,360x517,480x689,540x776,640x919,720x1034,752x1080&from=bu&cs=752x0",
    preferences: {
      age_range: { min: 21, max: 22 },
      distance: 110,
      gender_preference: ["female"],
    },
  },

  {
    full_name: "Alice Smuseva",
    username: "beautybeauty",
    email: "smuseva2007@example.com",
    gender: "female" as const,
    birthdate: "2007-01-27",
    bio: "I'm a beauty, I do makeup, I'm always well-groomed, nails are done",
    avatar_url:
      "https://sun9-30.vkuserphoto.ru/s/v1/ig2/DqxBD1lXa0ahOozt13eoAuag1T4HYy_H3LeCR7gcmoRlnmUHTHEOeTQYUkA6HLX3rFdtL1RRs5iY5OKiidTw51aJ.jpg?quality=95&as=32x53,48x80,72x119,108x179,160x265,240x398,360x597,480x795,540x895,640x1060,720x1193,1080x1790,1280x2121&from=bu&cs=1280x0",
    preferences: {
      age_range: { min: 20, max: 35 },
      distance: 3,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Jeffrey Epstein",
    username: "#1Island",
    email: "jeevacation@gmail.com",
    gender: "male" as const,
    birthdate: "1953-01-20",
    bio: "I'm your Uncle Epstein, very rich, I love children, they are the flowers of life",
    avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Jeffrey_Epstein_mug_shot.jpg",
    preferences: {
      age_range: { min: 8, max: 16 },
      distance: 69,
      gender_preference: ["female"],
    },
  },

  {
    full_name: "Alexey Remizov",
    username: "jxgmut",
    email: "jxgmut@example.com",
    gender: "male" as const,
    birthdate: "2004-04-22",
    bio: "I play games and guitar, I study at the university",
    avatar_url:
      "https://sun9-67.userapi.com/s/v1/ig2/gwaRr7vVF9NaUnGpmd3iXG9A-cO2XimTQoZi91oayMiKs1WIcj9-pUJUI1j7jJYS5UfcayE0OB0BZx5cyuAAyNms.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=1707x0",
    preferences: {
      age_range: { min: 50, max: 70 },
      distance: 7,
      gender_preference: ["female"],
    },
  },

  {
    full_name: "Samat Adilov",
    username: "pingvidil",
    email: "pingvidil@example.com",
    gender: "male" as const,
    birthdate: "2006-04-7",
    bio: "I play video games, I study at the university as a journalist",
    avatar_url:
      "https://sun9-67.userapi.com/s/v1/ig2/1WLgy_fGvmohTcZmRuA3m2xTVVZodvJ-YG5xtzjENnQ67VRA3drfqdQYU-7JxuUm53w2nHYiUlegphVh-4pyRYsE.jpg?quality=96&as=32x20,48x30,72x44,108x67,160x99,240x148,360x222,480x296,540x333,640x395,720x444,1080x666&from=bu&cs=1080x0",
    preferences: {
      age_range: { min: 18, max: 34 },
      distance: 777,
      gender_preference: ["female"],
    },
  },

  {
    full_name: "Katya Kalyaskina",
    username: "katuxa",
    email: "katuxa@example.com",
    gender: "female" as const,
    birthdate: "2004-07-21",
    bio: "I'm participating in movies, learning Chinese, traveling the world.",
    avatar_url:
      "https://sun9-12.userapi.com/s/v1/ig2/lGDWZoAs63AOz4XWEqe0Daa0seuMltzAxHVVikgVrMieHMr9xs4hZ_yaLcW9Ep4urz8xvCA4ih7LJlssOJSx2YTn.jpg?quality=96&as=32x29,48x43,72x65,108x97,160x143,240x215,360x323,480x431,540x484,640x574,720x646,1080x969,1280x1148,1440x1292,1998x1792&from=bu&cs=1998x0",
    preferences: {
      age_range: { min: 18, max: 34 },
      distance: 77,
      gender_preference: ["male"],
    },
  },

  {
    full_name: "Anton Usenko",
    username: "goose",
    email: "goose2006@example.com",
    gender: "male" as const,
    birthdate: "2006-04-5",
    bio: "I play video games, I study at the university as a psychologist, fluent in english",
    avatar_url:
      "https://sun9-63.userapi.com/s/v1/ig2/TouC8gCoXSc9kTbwvd77qELFr4g76QP3rjlFNDo3sJBxOU9EwSs3qQwWAV-zefIXLeY1hUi02EmrG9I4rJ8WgET5.jpg?quality=96&as=32x45,48x67,72x101,108x151,160x224,240x336,360x503,480x671,540x755,640x895,720x1007,1080x1510,1144x1600&from=bu&cs=1144x0",
    preferences: {
      age_range: { min: 30, max: 40 },
      distance: 240,
      gender_preference: ["female"],
    },
  },

  {
    full_name: "Sergey Ketraro",
    username: "leganda",
    email: "leganda@example.com",
    gender: "male" as const,
    birthdate: "2006-03-21",
    bio: "I play video games, electronics engineer",
    avatar_url:
      "https://sun9-2.userapi.com/s/v1/ig2/gm3zw6Yto38FsdP5fjbFO8jo9CH5kFFy25JcMisJHmX4YjoAcpJNGf8-dLYBaNwkgMnOz98ukFcwcThBb19Pv8Qf.jpg?quality=95&as=32x28,48x42,72x63,108x94,160x139,240x209,360x313,480x418,540x470,640x557,720x627,1080x940&from=bu&cs=1080x0",
    preferences: {
      age_range: { min: 20, max: 40 },
      distance: 140,
      gender_preference: ["female"],
    },
  },

  {
    full_name: "Sergey Ryabinin",
    username: "Ryaba",
    email: "sergey228420@example.com",
    gender: "male" as const,
    birthdate: "2004-03-17",
    bio: "Electrician, I work with spare parts for cars",
    avatar_url:
      "https://sun9-74.userapi.com/s/v1/ig2/b-h8mZticpqarVdbFuTfRHJiHWpdy5nyPZa7TPiZA6tEW_QdQIzbETnJI8GBkNBIX_D-8NMTpWu3GlGbGzxviIUT.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960&from=bu&cs=1280x0",
    preferences: {
      age_range: { min: 18, max: 40 },
      distance: 40,
      gender_preference: ["female"],
    },
  },

  {
    full_name: "Angelina Dudchenko",
    username: "Fluffy Mccormick",
    email: "fluffymdm@example.com",
    gender: "female" as const,
    birthdate: "2004-05-12",
    bio: "Electrician, I work with Dodo pizza",
    avatar_url:
      "https://sun9-15.userapi.com/s/v1/ig2/MCujqmBvf6IY5lfkWf8nhf_5mEdvZk5DtHEr_0Ci_QdhKDWm2FzaOCM58M_lMLVy8XzKfzrjQMqsM7BH2tDCUIkR.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1024x1536&from=bu&cs=1024x0",
    preferences: {
      age_range: { min: 18, max: 22 },
      distance: 20,
      gender_preference: ["male"],
    },
  },

  {
    full_name: "Sofia Morkovkina",
    username: "Soffa",
    email: "morkovka123@example.com",
    gender: "female" as const,
    birthdate: "2001-01-11",
    bio: "businesswoman, work, home, business",
    avatar_url:
      "https://sun9-77.userapi.com/s/v1/ig2/7e9B4E-qvXC_7bztqh1KXj4DKAV538fSgjDObyh3OVvdye1bnUJDX6OEDaurfIsOq4stLUSJVdk_SGxZc8Oqbrmn.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
    preferences: {
      age_range: { min: 22, max: 28 },
      distance: 10,
      gender_preference: ["male"],
    },
  },
];

async function createFakeProfiles() {
  console.log("Starting to create fake profiles...");

  for (let i = 0; i < fakeProfiles.length; i++) {
    const profile = fakeProfiles[i];

    try {
      console.log(
        `\n Creating profile ${i + 1} / ${fakeProfiles.length}: ${profile.full_name}`,
      );

      // --- 1. Check if auth user already exists
      const { data: existingAuthUsers } = await supabase.auth.admin.listUsers();
      const existingAuthUser = existingAuthUsers.users.find(
        (u) => u.email === profile.email,
      );

      let userId: string;

      if (existingAuthUser) {
        console.log(
          ` Auth user already exists for ${profile.full_name}, using existing...`,
        );
        userId = existingAuthUser.id;
      } else {
        // ---- Create new auth user -----
        const { data: authData, error: authError } =
          await supabase.auth.admin.createUser({
            email: profile.email,
            password: PASSWORD,
            email_confirm: true, // <---- Auto-confirm email
            user_metadata: {
              full_name: profile.full_name,
              username: profile.username,
            },
          });

        if (authError) {
          console.error(
            ` Error creating auth user for ${profile.full_name}:`,
            authError,
          );
          continue;
        }

        userId = authData.user.id;
        console.log(`Auth user created: ${userId}`);
      }

      // ----- 2. Check if user profile already exixsts ------
      const { data: existingProfile } = await supabase
        .from("users")
        .select("id")
        .eq("id", userId)
        .single();
      if (existingProfile) {
        console.log(
          ` Profile already exists for ${profile.full_name}, updating...`,
        );

        //  --- Update existing profile with new data ----
        const { error: updateError } = await supabase
          .from("users")
          .update({
            full_name: profile.full_name,
            username: profile.username,
            email: profile.email,
            gender: profile.gender,
            birthdate: profile.birthdate,
            bio: profile.bio,
            avatar_url: profile.avatar_url,
            preferences: profile.preferences,
            location_lat: faker.location.latitude({ min: 48.7, max: 48.8 }), // <--- Russia, Volgograd area
            location_lng: faker.location.longitude({ min: 44.4, max: 44.5 }),

            is_verified: true,
            is_online: Math.random() > 0.5,
          })
          .eq("id", userId);

        if (updateError) {
          console.error(
            ` Error updating profile for ${profile.full_name}:`,
            updateError,
          );
          continue;
        }
      } else {
        // ----- Insert new user profile data -----
        const { error: profileError } = await supabase.from("users").insert({
          id: userId,
          full_name: profile.full_name,
          username: profile.username,
          email: profile.email,
          gender: profile.gender,
          birthdate: profile.birthdate,
          bio: profile.bio,
          avatar_url: profile.avatar_url,
          preferences: profile.preferences,
          location_lat: faker.location.latitude({ min: 48.7, max: 48.8 }), // <--- Russia, Volgograd area
          location_lng: faker.location.longitude({ min: 44.4, max: 44.5 }),
          is_verified: true,
          is_online: Math.random() > 0.5,
        });

        if (profileError) {
          console.error(
            ` Error creating profile for ${profile.full_name}:`,
            profileError,
          );

          // ---- Try to clean up the auth user if profile creation fails ----
          await supabase.auth.admin.deleteUser(userId);
          continue;
        }
      }
      console.log(`Profile created successfully for ${profile.full_name}`);
      console.log(`Email: ${profile.email}`);
      console.log(`Password: ${PASSWORD}`);
      console.log(`Username: ${profile.username}`);
    } catch (error) {
      console.error(
        ` Unexpected error creating profile for ${profile.full_name}:`,
        error,
      );
    }
  }
}

console.log("\n Fake profile creation completed!");
console.log("\n Summary:");
console.log('All accounts use password: "password"');
console.log("All emails are auto-confirmed");
console.log("Profiles include random location data");
console.log("Some users are marked as online for testing");

//   ---- Run the script
createFakeProfiles().catch(console.error);
