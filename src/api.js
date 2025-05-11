import { createClient } from "@supabase/supabase-js";

// const password = "iVwbPs6It56CcByc";
const supabase = createClient(
  "https://gjtoyjjvonlmorwixtul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqdG95amp2b25sbW9yd2l4dHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2OTc0NDEsImV4cCI6MjA1OTI3MzQ0MX0.IaZ5w_kmrTueanrNx6MeGd-9fE_zBSMml_NCBgkt87Y"
);

export const api = {
  insertUser: async data => {
    const { error } = await supabase.from("users").insert({ ...data });
    console.error(error);
  },
};
