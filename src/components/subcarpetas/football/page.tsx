"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const players = {
  primera: [
    { id: 1, name: "Franco Armani", position: "Portero", number: 1, image: "/diverse-football-player.png" },
    { id: 2, name: "Gonzalo Montiel", position: "Defensa", number: 2, image: "/diverse-football-player.png" },
    { id: 3, name: "Javier Pinola", position: "Defensa", number: 6, image: "/diverse-football-player.png" },
    { id: 4, name: "Milton Casco", position: "Defensa", number: 17, image: "/diverse-football-player.png" },
    {
      id: 5,
      name: "Juan Fernando Quintero",
      position: "Mediocampista",
      number: 8,
      image: "/diverse-football-player.png",
    },
    { id: 6, name: "Sebastián Driussi", position: "Delantero", number: 11, image: "/diverse-football-player.png" },
  ],
  reserva: [
    { id: 7, name: "Santiago Simón", position: "Portero", number: 23, image: "/young-football-player.jpg" },
    { id: 8, name: "Matías Suárez", position: "Delantero", number: 19, image: "/young-football-player.jpg" },
  ],
  tecnico: [
    { id: 9, name: "Martín Demichelis", position: "DT", number: 0, image: "/diverse-football-coach.png" },
    { id: 10, name: "Juan Pablo Vojvoda", position: "Asistente", number: 0, image: "/diverse-football-coach.png" },
  ],
}

export default function FootballPage() {
  const [selectedTab, setSelectedTab] = useState("primera")

  const currentPlayers = players[selectedTab as keyof typeof players]

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">Fútbol - Plantel</h1>
          <p className="text-gray-100">Conoce a los jugadores que representan a River Plate.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="primera">Primera</TabsTrigger>
              <TabsTrigger value="reserva">Reserva</TabsTrigger>
              <TabsTrigger value="tecnico">Técnico</TabsTrigger>
            </TabsList>

            {Object.keys(players).map((key) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {players[key as keyof typeof players].map((player) => (
                    <Card key={player.id} className="overflow-hidden hover:shadow-lg transition cursor-pointer">
                      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${player.image}')` }} />
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="flex justify-center mb-3">
                            <Badge className="bg-primary text-white text-2xl px-4 py-1">{player.number}</Badge>
                          </div>
                          <h3 className="text-xl font-bold text-accent mb-1">{player.name}</h3>
                          <p className="text-gray-600 text-sm">{player.position}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  )
}
