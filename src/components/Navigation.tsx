import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "홈", href: "#home" },
  { label: "소개", href: "#about" },
  { label: "경력", href: "#experience" },
  { label: "기술", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "수상", href: "#awards" },
  { label: "연락처", href: "#contact" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // 로고를 5번 클릭하면 관리자 페이지로 이동하는 이스터 에그
  useEffect(() => {
    if (logoClicks === 5) {
      navigate("/admin");
      setLogoClicks(0);
    }
  }, [logoClicks, navigate]);

  const handleLogoClick = () => {
    setLogoClicks((prev) => prev + 1);
    setTimeout(() => setLogoClicks(0), 2000);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-smooth"
        >
          포트폴리오
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark(!isDark)}
          className="rounded-full"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </nav>
  );
};
