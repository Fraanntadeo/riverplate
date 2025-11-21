import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "English | River Plate",
  description: "English Site",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Welcome to River Plate" subtitle="English Site" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            This is the official website of Club Atlético River Plate in English.
          </p>
          <p className="text-muted-foreground">
            You are viewing the content in English. You can change the language in the top menu.
          </p>
        </div>
      </div>
    </>
  )
}
