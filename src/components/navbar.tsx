"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)

  const navItems = [
    { label: "Inicio", href: "/" },
    {
      label: "Fútbol",
      href: "#",
      submenu: [
        { label: "Plantel de Primera", href: "/plantel-de-primera" },
        { label: "Estadísticas de Equipo", href: "/estadisticas-equipo" },
        { label: "División Reserva", href: "/division-reserva" },
        { label: "Divisiones Juveniles", href: "/divisiones-juveniles" },
        { label: "Divisiones Infantiles", href: "/divisiones-infantiles" },
        { label: "Fútbol Femenino", href: "/futbol-femenino" },
        { label: "Futsal", href: "/futbol-sala" },
        { label: "Títulos", href: "/titulos" },
      ],
    },
    {
      label: "Institucional",
      href: "#",
      submenu: [
        { label: "Comisión Directiva 2025", href: "/comision-directiva-2025-club-atletico-river-plate" },
        { label: "Historia", href: "/historia" },
        { label: "Viví el Club", href: "/vivi-el-club" },
        { label: "El Monumental", href: "/el-monumental" },
        { label: "Integridad River", href: "/integridad-river" },
        { label: "Fundación River Plate", href: "/fundacion-river-plate" },
        { label: "Responsabilidad Social", href: "/responsabilidad-social" },
      ],
    },
    {
      label: "Socios",
      href: "#",
      submenu: [
        { label: "Carné Único", href: "/carnet-unico" },
        { label: "Derecho a la Información", href: "/derecho-a-la-informacion" },
        { label: "Información de Socio", href: "/informacion-socio" },
        { label: "¿Cómo pago mi cuota?", href: "/como-pago-mi-cuota" },
        { label: "Defensoría del Socio", href: "/defensoria-del-socio" },
        { label: "Socios Vitalicios", href: "/socios-vitalicios" },
      ],
    },
    {
      label: "Polideportivo",
      href: "#",
      submenu: [
        { label: "Vóley", href: "/voley" },
        { label: "Básquet", href: "/basquet" },
        { label: "Hockey sobre Césped", href: "/hockey-sobre-cesped" },
        { label: "Handball", href: "/handball" },
        { label: "Ajedrez", href: "/ajedrez" },
        { label: "Natación", href: "/natacion" },
        { label: "E-Sports", href: "/esports" },
      ],
    },
    {
      label: "Entradas",
      href: "#",
      submenu: [
        { label: "Ingresos al Monumental", href: "/ingresos-al-monumental" },
        { label: "Futuro Monumental", href: "/futuro-monumental" },
      ],
    },
    {
      label: "Multimedia",
      href: "#",
      submenu: [
        { label: "Videos", href: "/videos" },
        { label: "Brandbook", href: "/brandbook" },
      ],
    },
  ]

  return (
    <div className="w-full bg-primary text-primary-foreground">
      {/* Top Header with External Links */}
      <div className="bg-accent/90 text-xs py-2 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-between md:justify-start items-center">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.somosriver.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                Somos River
              </a>
              <a
                href="http://www.tiendariver.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                Tienda River
              </a>
              <a href="/patrocinadores" className="hover:text-primary transition">
                Patrocinadores
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-2xl">
            CARP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-0">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-primary shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm hover:bg-primary/90 transition first:rounded-t-md last:rounded-b-md"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-white text-primary hover:bg-secondary">
              <a href="https://www.riverid.com.ar/SocioPleno" target="_blank" rel="noopener noreferrer">
                Hazte Socio
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Toggle menu">
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block flex-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition"
                    onClick={() => !item.submenu && setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => setExpandedDropdown(expandedDropdown === item.label ? null : item.label)}
                      className="px-3 py-2"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition ${expandedDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.submenu && expandedDropdown === item.label && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-3 py-2 text-sm hover:bg-primary/90 rounded-md transition"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="w-full bg-white text-primary hover:bg-secondary">
              <a href="https://www.riverid.com.ar/SocioPleno" target="_blank" rel="noopener noreferrer">
                Hazte Socio
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
