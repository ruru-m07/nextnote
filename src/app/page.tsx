import FormSubmit from "@/components/shared/FormSubmit";

export default function Home() {
  return (
    <main className="container py-4">
      <div className="w-full h-[600px] flex flex-col justify-between items-center">
        <h1 className="text-center font-bold text-3xl text-slate-900">
          Your Notes
        </h1>
        <div>
          <h2 className="text-center text-lg my-auto text-slate-900">
            No notes now
          </h2>
        </div>
        <div>
          <FormSubmit />
        </div>
      </div>
    </main>
  );
}
