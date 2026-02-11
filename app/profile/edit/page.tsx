"use client";

import PhotoUpload from "@/components/PhotoUpload";
import { getCurrentUserProfile, updateUserProfile } from "@/lib/actions/profile";
import { useRouter} from "next/navigation";
import { useEffect, useState} from "react";

export default function EditProfilePage() {
    const [loading, setLoading] = useState(true);
    const [saving, setsaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const [formData, setFormData] = useState({
        full_name: "",
        username:"",
        bio:"",
        gender:"male" as "male" | "female" | "other",
        birthdate:"",
        avatar_url:"",
    });

    useEffect(() => {
        async function loadProfile() {
            try {
                const profileData = await getCurrentUserProfile();
                if (profileData) {
                    setFormData({
                        full_name: profileData.full_name || "",
                        username: profileData.username || "",
                        bio: profileData.bio || "",
                        gender: profileData.gender || "other",
                        birthdate: profileData.birthdate || "",
                        avatar_url: profileData.avatar_url || "",
                    });
                }
            } catch (error) {
                setError("Failed to load profile.");
            } finally {
                setLoading(false);
            }
        }
        loadProfile();
    }, []);

    async function handleFormSubmit(event: React.FormEvent) {
        event.preventDefault();

        setsaving(true);
        setError(null);

        try {
            const result = await updateUserProfile(formData);
            if (result.success) {
                router.push("/profile");
            } else {
                setError(result.error || "Failed to update profile.");
            }
        } catch (error) {
            setError("Failed to update profile.");
        } finally {
            setSaving(false);
        }
    }

    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const {name, value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Loading profile...
          </p>
        </div>
      </div>
        );
    }
}