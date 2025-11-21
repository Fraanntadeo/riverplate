"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Photo ${i + 1}`,
  image: `/placeholder.svg?height=400&width=400&query=football stadium action ${i + 1}`,
}))

const videos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Video: Highlights ${i + 1}`,
  thumbnail: `/placeholder.svg?height=300&width=500&query=football highlights ${i + 1}`,
  duration: `${3 + i}:45`,
}))

export default function MultimediaPage() {
  const [selectedTab, setSelectedTab] = useState("photos")

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">Multimedia</h1>
          <p className="text-gray-100">Fotos y videos de los mejores momentos de River Plate.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="photos">Fotos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="h-64 bg-cover bg-center rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group"
                    style={{ backgroundImage: `url('${photo.image}')` }}
                  >
                    <div className="w-full h-full bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition">Ver</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {videos.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div
                      className="h-48 bg-cover bg-center rounded-lg overflow-hidden hover:shadow-lg transition relative"
                      style={{ backgroundImage: `url('${video.thumbnail}')` }}
                    >
                      <div className="w-full h-full bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition" />
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="mt-3 font-bold text-accent group-hover:text-primary transition">{video.title}</h3>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
