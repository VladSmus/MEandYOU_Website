"use client";

import { useEffect, useState } from "react";
import { getCurrentUserProfile } from "@/lib/actions/profile";
import { calculateAge } from "@/lib/helpers/calculate-age";
import Link from "next/link";

export interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  email: string;
  gender: "male" | "female" | "other";
  birthdate: string;
  bio: string;
  avatar_url: string;
  preferences: UserPreferences;
  location_lat?: number;
  location_lng?: number;
  last_active: string;
  is_verified: boolean;
  is_online: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserPreferences {
  age_range: {
    min: number;
    max: number;
  };
  distance: number;
  gender_preference: ("male" | "female" | "other")[];
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadingProfile() {
      try {
        const profileData = await getCurrentUserProfile();
        console.log(profileData);
        if (profileData) {
          setLoading(profileData);
        } else {
          setError("Failed to load profile");
        }
      } catch (error) {
        console.error("Error loading profile: ", error);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }
    loadingProfile();
  }, []);
}
