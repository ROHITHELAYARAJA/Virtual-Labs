"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  BrainCircuit,
  Database,
  Network,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  ExternalLink,
  Award,
  BookOpen,
  Layers,
  Cpu,
  Bot,
  BarChart3,
  Cloud,
  Sparkles,
  Zap,
  GraduationCap
} from "lucide-react";

const VIRTUAL_LAB_STATEMENTS = [
  {
    badge: "Department of Artificial Intelligence & Data Science",
    line1: "Department of AI & DS.",
    line2: "Virtual Laboratory Platform.",
    line3: "Empowering future engineers.",
    desc: "Official virtual laboratory platform for the Department of Artificial Intelligence and Data Science at V.S.B. Engineering College, providing immersive hands-on simulations and interactive engineering experimentation.",
    highlight: "Department of AI & DS • Official Virtual Labs"
  },
  {
    badge: "Interactive Department Sandbox",
    line1: "Simulate faster.",
    line2: "Learn smarter.",
    line3: "Grow with interactive virtual labs.",
    desc: "We design, build, and simulate deep neural networks, machine learning pipelines, relational databases, cloud microservices, and high-performance algorithms for AI & DS engineers.",
    highlight: "Autonomous Curriculum Aligned"
  },
  {
    badge: "Deep Algorithmic Visualization",
    line1: "Visualize code.",
    line2: "Master concepts.",
    line3: "Department of AI & DS Labs.",
    desc: "Inspect live memory frames, observe dynamic execution traces, trace recursive call stacks, and explore interactive simulators anytime, anywhere without local setup.",
    highlight: "Placement & GATE Ready"
  },
  {
    badge: "Department Core Curriculum",
    line1: "Code anywhere.",
    line2: "Simulate anytime.",
    line3: "Department of AI & DS Virtual Labs.",
    desc: "Comprehensive virtual laboratory manuals, Bloom's Taxonomy mapped Course Outcomes (COs), and real-time algorithmic execution suites developed for AI & DS students.",
    highlight: "Department of AI & DS • Experiential Learning"
  }
];

const ROLLING_CARDS = [
  {
    title: "Data Structures Design Lab",
    tag: "DSDL • AD8301",
    desc: "Interactive sorting step visualizers, Java recursion call stack & LeetCode practice.",
    icon: Code2,
    color: "from-sky-500/10 to-blue-500/10 text-[#0284c7] border-sky-500/30",
    url: "/labs/data-structures",
  },
  {
    title: "Deep Learning Laboratory",
    tag: "DLL • AD8481",
    desc: "XOR DNN models, CNN digit/face recognition, RNN language models, LSTM & GANs.",
    icon: BrainCircuit,
    color: "from-indigo-500/10 to-sky-500/10 text-indigo-500 border-indigo-500/30",
    url: "/labs/ai-machine-learning",
  },
  {
    title: "Database Management Systems Lab",
    tag: "DBMSL • AD8303",
    desc: "SQL relational execution engine, BCNF normalization, B+ Tree indexing & ACID transactions.",
    icon: Database,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-500 border-emerald-500/30",
    url: "/labs/dbms-lab",
  },
  {
    title: "Object Oriented Programming (Java)",
    tag: "OOPL • AD8302",
    desc: "Class encapsulation, inheritance hierarchies, matrix spiral/wave, custom exceptions & JDBC.",
    icon: Code2,
    color: "from-rose-500/10 to-red-500/10 text-rose-500 border-rose-500/30",
    url: "/labs/oops-java",
  },
  {
    title: "Programming in C Laboratory",
    tag: "CPL • GE3171",
    desc: "Formatted I/O, control structures, pointer dereferencing, dynamic memory & structures.",
    icon: Cpu,
    color: "from-cyan-500/10 to-sky-500/10 text-cyan-600 border-cyan-500/30",
    url: "/labs/c-programming",
  },
  {
    title: "Big Data Analytics Lab",
    tag: "BDAL • CS8711",
    desc: "Hadoop HDFS cluster replication, Distributed MapReduce, Apache Hive & HBase.",
    icon: BarChart3,
    color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-500/30",
    url: "/labs/big-data-analytics",
  },
  {
    title: "Cloud Service Management Lab",
    tag: "CSML • CS8811",
    desc: "AWS RBAC organization, web app TCO cost modeling, metric telemetry & workload migration.",
    icon: Cloud,
    color: "from-teal-500/10 to-cyan-500/10 text-teal-600 border-teal-500/30",
    url: "/labs/cloud-service-management",
  },
  {
    title: "DSA Visualization Studio",
    tag: "12 CORE MODULES",
    desc: "Complete top-to-bottom interactive DSA learning curriculum with live simulators.",
    icon: Layers,
    color: "from-sky-500/10 to-blue-500/10 text-[#0284c7] border-sky-500/30",
    url: "/dsa-visualization",
  },
];

export function HeroObjectives() {
  const [statementIdx, setStatementIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatementIdx((prev) => (prev + 1) % VIRTUAL_LAB_STATEMENTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentStatement = VIRTUAL_LAB_STATEMENTS[statementIdx];

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-between pt-28 sm:pt-36 pb-14 px-4 sm:px-6 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 overflow-hidden">
      <div className="container max-w-[1440px] mx-auto relative z-10 pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7 w-full text-left space-y-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={statementIdx}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/30 text-[#0284c7] dark:text-[#38bdf8] text-xs font-mono font-bold shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#0284c7]" />
                  <span>{currentStatement.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] sm:leading-[1.08] font-heading">
                  {currentStatement.line1}{" "}
                  <span className="font-serif-italic font-normal text-slate-600 dark:text-slate-400">
                    {currentStatement.line2}
                  </span>
                  <br />
                  <span className="text-[#0284c7] dark:text-[#38bdf8] font-black">
                    {currentStatement.line3}
                  </span>
                </h1>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
                  {currentStatement.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-1.5 py-1 max-w-xl">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5 text-[#0284c7] dark:text-[#38bdf8] font-bold">
                  <Zap className="h-3 w-3" />
                  <span>Synchronized Laboratory Cycle ({statementIdx + 1}/4)</span>
                </span>
                <span>8.0s Interval</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  key={`progress-bar-${statementIdx}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8.0, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#0284c7] via-sky-400 to-[#ea580c]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 w-full">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-full px-8 sm:px-10 py-6 sm:py-7 font-bold shadow-xl shadow-sky-600/25 hover:scale-105 transition-all text-sm sm:text-base gap-2.5 cursor-pointer"
              >
                <Link href="/labs">
                  <span>Let&apos;s explore &amp; simulate</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 sm:px-9 py-6 sm:py-7 text-sm sm:text-base font-semibold border-2 border-slate-300 dark:border-zinc-700 bg-white/90 dark:bg-card/80 hover:bg-white hover:border-[#0284c7] text-foreground transition-all gap-2 shadow-sm cursor-pointer"
              >
                <Link href="/dsa-visualization">
                  <span>DSA Visualization Platform</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[11px] font-mono text-muted-foreground">
              <span className="font-semibold text-foreground mr-1">Direct Labs:</span>
              {[
                { name: "DBMS", href: "/labs/dbms-lab" },
                { name: "OOP (Java)", href: "/labs/oops-java" },
                { name: "DSA", href: "/labs/data-structures" },
                { name: "Big Data", href: "/labs/big-data-analytics" },
                { name: "Cloud CSM", href: "/labs/cloud-service-management" },
                { name: "Deep Learning", href: "/labs/ai-machine-learning" },
                { name: "C Programming", href: "/labs/c-programming" },
              ].map((labChip) => (
                <Link
                  key={labChip.name}
                  href={labChip.href}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/80 hover:bg-[#0284c7]/10 hover:text-[#0284c7] border border-slate-200 dark:border-zinc-700 transition-colors"
                >
                  {labChip.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0284c7]/30 via-sky-400/25 to-indigo-500/20 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10 animate-pulse" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden bg-white/95 dark:bg-zinc-900/90 border border-sky-500/20 dark:border-sky-500/30 shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center backdrop-blur-xl"
              >
                <div className="w-full flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-[#0284c7] dark:text-[#38bdf8] text-[11px] font-mono font-bold border border-sky-500/20">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    VIRTUAL LAB SIMULATOR
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-zinc-400">
                    AI &amp; DS LABS
                  </span>
                </div>

                <div className="relative w-52 h-52 sm:w-64 sm:h-64 my-4 flex items-center justify-center">
                  <div className="absolute inset-2 rounded-full bg-sky-500/10 dark:bg-sky-500/15 blur-xl animate-pulse" />
                  <img
                    src="/virtual-lab-icon.png"
                    alt="Virtual Laboratory Platform"
                    className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 object-contain select-none group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                </div>

                <div className="w-full space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white font-heading">
                    Virtual Laboratory Platform
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Department of Artificial Intelligence &amp; Data Science
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                      Interactive Simulators
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                      Real-Time Code Engine
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                      Zero Setup
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTINUOUS ROLLING / MARQUEE ANIMATED TITLE CARDS SHOWCASE */}
      <div className="w-full mt-14 overflow-hidden relative select-none">
        {/* Subtle Fade Gradients on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-2">
          {[...ROLLING_CARDS, ...ROLLING_CARDS].map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.url}
                className="w-72 sm:w-80 p-5 rounded-2xl bg-card border border-border shadow-xs hover:border-[#0284c7] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${card.color} border shadow-2xs group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono font-bold">
                      {card.tag}
                    </Badge>
                  </div>

                  <h4 className="font-bold text-sm text-foreground group-hover:text-[#0284c7] transition-colors line-clamp-1">
                    {card.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-[#0284c7] transition-colors">
                  <span>Enter Module</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
