import React, { useState, useRef } from "react";
import { buttonVariants } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useMediaQuery } from "../hooks/use-media-query";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Planes Simples y Transparentes",
  description = "Elige el plan ideal para tu crecimiento.\nTodos incluyen acceso a la IA, actualizaciones constantes y soporte.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20 mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl text-white">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <label className="relative inline-flex items-center cursor-pointer select-none">
          <Label className="mr-3 text-muted-foreground">Mensual</Label>
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative"
          />
          <span className="ml-3 font-semibold text-muted-foreground">
            Anual <span className="text-primary">(Ahorra 20%)</span>
          </span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.2 + (index * 0.1),
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border-[1px] p-8 bg-[#0f172a] text-center lg:flex lg:flex-col lg:justify-start relative shadow-2xl`,
              plan.isPopular ? "border-primary border-2 shadow-[0_0_30px_rgba(6,182,212,0.15)]" : "border-border",
              "flex flex-col h-full",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary py-1 px-3 rounded-bl-xl rounded-tr-lg flex items-center">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                <span className="text-primary-foreground ml-1 font-sans font-bold text-sm">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-lg font-semibold text-cyan-400 uppercase tracking-widest mb-2">
                {plan.name}
              </p>
              <div className="mt-4 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    formatter={(value) => `${value}`}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                  €
                </span>
                {plan.period !== "Pago único" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs leading-5 text-muted-foreground mt-2 mb-6">
                {isMonthly ? "facturado mensualmente" : "facturado anualmente"}
              </p>

              <hr className="w-full border-gray-800 mb-6" />

              <ul className="gap-4 flex flex-col mb-8 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="rounded-full bg-cyan-900/50 p-1 mt-0.5">
                       <Check className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter py-6 rounded-xl",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1",
                    plan.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-cyan-500 border-none"
                      : "bg-[#1e293b] text-white hover:bg-gray-800 border-gray-700"
                  )}
                >
                  {plan.buttonText}
                </a>
                <p className="mt-4 text-xs leading-5 text-gray-500">
                  {plan.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
