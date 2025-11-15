import { supabase } from "@/lib/supabaseClient";

export default async function TestSupabase() {
  // Remplace "users" par une table que tu as réellement dans Supabase
  const { data, error } = await supabase
    .from("users")   // <-- mets ici une table qui existe !
    .select("*")
    .limit(5);

  return (
    <div style={{ padding: 20 }}>
      <h1>Test Supabase 🔥</h1>

      {error && (
        <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>
          {error.message}
        </pre>
      )}

      {!error && (
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
