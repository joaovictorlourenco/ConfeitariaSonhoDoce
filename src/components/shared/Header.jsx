import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header({ logoSrc }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logoSrc}
              alt="Logo Sonho Doce"
              className="rounded-full object-cover h-8 w-8"
            />
            <span className="text-2xl font-bold text-primary">Sonho Doce</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="#produtos"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#localizacao"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Localização
            </a>
            <Button asChild className="rounded-full">
              <a href="#contato">Faça seu Pedido</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="#inicio"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#sobre"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="#produtos"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#depoimentos"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <Button asChild className="w-full rounded-full">
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                Faça seu Pedido
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
