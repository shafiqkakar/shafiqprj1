"use client";

import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const profile = {
    name: "M Shafiq Kakar",
    initials: "MSK",
    degree: "BS Information Technology",
    university: "University of Sargodha",
    email: "shafiqkhn966@gmail.com",
    profilePic: "/shafiqprj1.jpg", // Updated to your exact image filename
    resumeUrl: "/resume.pdf", 
    socials: {
      github: "https://github.com/shafiqkakar",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com/trendzswiftz",
      facebook: "https://facebook.com",
    },
  };

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  const skills = [
    {
      title: "Programming & Logic",
      description: "Building a solid foundation in core programming logic, problem-solving, and object-oriented principles.",
      icon: "💻",
      items: ["Python", "Object-Oriented Programming (OOP)", "Algorithms", "Debugging"],
    },
    {
      title: "Database Systems",
      description: "Understanding how to structure data, design schemas, and write relational queries.",
      icon: "🗄️",
      items: ["SQL Fundamentals", "Database Design", "ER Modeling", "MySQL Workbench"],
    },
    {
      title: "Web Development",
      description: "Learning modern web frameworks to bring user interfaces and digital experiences to life.",
      icon: "🌐",
      items: ["HTML5 & CSS3", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Emerging Tech & Tools",
      description: "Exploring AI tools, version control, and development environments to boost productivity.",
      icon: "⚡",
      items: ["Artificial Intelligence", "Generative AI Tools", "Git & GitHub", "VS Code"],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Student Management System",
      category: "Python · OOP",
      description: "A practical learning project focused on organizing student records, managing enrollment details, and applying OOP principles, classes, and input validation.",
      status: "In progress / Practice",
      icon: "🐍",
      tags: ["Python", "OOP", "Console App"],
    },
    {
      number: "02",
      title: "Database Schema & ERD Design",
      category: "SQL · Database Systems",
      description: "A database practice project exploring entity-relationship modeling, table schema design, constraints (NOT NULL, UNIQUE, CHECK), and relational queries.",
      status: "Academic lab work",
      icon: "📊",
      tags: ["MySQL", "ER Diagrams", "SQL Constraints"],
    },
    {
      number: "03",
      title: "Personal Portfolio Website",
      category: "Next.js · TypeScript · Tailwind",
      description: "A responsive, modern personal website designed to showcase my academic journey, technical skills, and project work.",
      status: "Live & Active",
      icon: "✨",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormStatus("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject ? formData.subject : `Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

    window.location.href = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormStatus("Email app opened successfully!");
  };

  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#2C2724] font-sans selection:bg-[#D4A373] selection:text-[#2C2724] relative overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E2DCCE] bg-[#F5F2EB]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5E34] text-sm font-black text-[#F5F2EB] shadow-sm">{profile.initials}</span>
            <span className="font-bold tracking-tight text-[#2C2724]">{profile.name}<span className="text-[#8B5E34]">.</span></span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-[#6B635B] transition hover:text-[#8B5E34]">{label}</a>)}
          </nav>
          
          <div className="hidden items-center gap-3 md:flex">
            <a href={profile.resumeUrl} download className="rounded-xl border border-[#8B5E34]/30 bg-[#8B5E34]/10 px-4 py-2 text-xs font-bold text-[#8B5E34] transition hover:bg-[#8B5E34] hover:text-[#F5F2EB]">
              📄 Download CV
            </a>
            <a href="#contact" className="rounded-xl bg-[#8B5E34] px-4 py-2 text-xs font-bold text-[#F5F2EB] transition hover:bg-[#6D4827]">
              Let&apos;s Connect ↗
            </a>
          </div>

          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-[#D0C8B8] p-2 text-[#2C2724] md:hidden">{menuOpen ? "✕" : "☰"}</button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#E2DCCE] px-5 py-3 md:hidden space-y-2">
            {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-[#6B635B] hover:bg-[#EAE4D6]">{label}</a>)}
            <a href={profile.resumeUrl} download className="block rounded-lg px-3 py-2 text-sm font-bold text-[#8B5E34] hover:bg-[#EAE4D6]">📄 Download CV</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative isolate scroll-mt-20">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8B5E34]/30 bg-[#8B5E34]/10 px-3.5 py-2 text-xs font-semibold text-[#8B5E34]">
              <span className="h-2 w-2 rounded-full bg-[#276749] animate-pulse" />BS IT Student <span className="text-[#A09587]">/</span> Aspiring Developer
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#2C2724] sm:text-5xl md:text-6xl lg:text-[68px]">
              Building My Future in <span className="text-[#8B5E34]">Technology.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5A524C] sm:text-lg">
              I&apos;m a BS Information Technology student at the University of Sargodha, learning to turn ideas into useful digital experiences through Python, databases, web development, and AI.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#7C7267] font-mono italic">
              Learning with purpose. Building with curiosity. Growing through code.
            </p>

            {/* Social Media Quick Links */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B5E34]">Connect:</span>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" title="GitHub" className="p-2 rounded-lg bg-[#EAE4D6] text-[#2C2724] border border-[#D0C8B8] hover:border-[#8B5E34] hover:text-[#8B5E34] transition-all">
                🐙 <span className="text-xs font-semibold hidden sm:inline ml-1">GitHub</span>
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="p-2 rounded-lg bg-[#EAE4D6] text-[#2C2724] border border-[#D0C8B8] hover:border-[#8B5E34] hover:text-[#8B5E34] transition-all">
                💼 <span className="text-xs font-semibold hidden sm:inline ml-1">LinkedIn</span>
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noreferrer" title="Instagram" className="p-2 rounded-lg bg-[#EAE4D6] text-[#2C2724] border border-[#D0C8B8] hover:border-[#8B5E34] hover:text-[#8B5E34] transition-all">
                📸 <span className="text-xs font-semibold hidden sm:inline ml-1">Instagram</span>
              </a>
              <a href={profile.socials.facebook} target="_blank" rel="noreferrer" title="Facebook" className="p-2 rounded-lg bg-[#EAE4D6] text-[#2C2724] border border-[#D0C8B8] hover:border-[#8B5E34] hover:text-[#8B5E34] transition-all">
                🌐 <span className="text-xs font-semibold hidden sm:inline ml-1">Facebook</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#8B5E34] px-6 py-3 text-sm font-bold text-[#F5F2EB] shadow-md transition hover:bg-[#6D4827] hover:-translate-y-0.5">Explore My Work ↗</a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D0C8B8] bg-[#EAE4D6] px-6 py-3 text-sm font-bold text-[#2C2724] transition hover:border-[#8B5E34] hover:text-[#8B5E34]">Contact Me <span>✉</span></a>
            </div>
          </div>

          {/* Profile Image Display */}
          <div className="relative mx-auto w-full max-w-sm flex justify-center">
            <div className="absolute -inset-4 rounded-3xl bg-[#8B5E34]/10 blur-2xl pointer-events-none" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-[#E2DCCE] shadow-xl group">
              <img
                src={profile.profilePic}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 border-t border-[#E2DCCE] bg-[#EAE4D6]/50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E34]">Get to know me</p>
            <h2 className="mt-3 text-3xl font-bold text-[#2C2724] sm:text-4xl">A Student Today. A Developer in Progress.</h2>
            <p className="mt-3 max-w-2xl text-base text-[#5A524C]">My journey in technology is just getting started, and I am focused on turning what I learn in class into skills I can use in the real world.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <article className="rounded-2xl border border-[#E2DCCE] bg-[#F5F2EB] p-6 sm:p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8B5E34]/10 text-xl text-[#8B5E34]">🎓</div><div><p className="font-semibold text-[#2C2724]">{profile.degree}</p><p className="mt-1 text-sm text-[#7C7267]">{profile.university} · Pakistan</p></div></div>
              <div className="space-y-4 text-sm leading-7 text-[#5A524C] sm:text-base"><p>Hi, I&apos;m <span className="font-semibold text-[#2C2724]">{profile.name}</span>, an Information Technology student who enjoys understanding how technology works and how it can solve everyday problems.</p><p>I&apos;m developing my programming foundations with Python and Object-Oriented Programming, while learning how databases organize information and how modern websites are designed and built.</p><p>My goal is to keep learning consistently, build practical projects, and gradually grow into a developer who creates useful, accessible digital products.</p></div>
            </article>
            <aside className="rounded-2xl border border-[#E2DCCE] bg-[#F5F2EB] p-6 sm:p-8 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E34]">What drives me</p><div className="mt-6 space-y-6">{[{ icon: "◎", title: "Curiosity", text: "Understanding the why behind every concept." }, { icon: "↗", title: "Consistency", text: "Making progress through regular practice." }, { icon: "✳", title: "Creativity", text: "Turning ideas into real digital experiences." }].map((item) => <div key={item.title} className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#8B5E34]/20 bg-[#8B5E34]/10 text-lg text-[#8B5E34]">{item.icon}</span><div><h3 className="font-semibold text-[#2C2724]">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[#6B635B]">{item.text}</p></div></div>)}</div></aside>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24 border-y border-[#E2DCCE]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E34]">My toolkit</p>
            <h2 className="mt-3 text-3xl font-bold text-[#2C2724] sm:text-4xl">Skills I&apos;m Building, One Step at a Time.</h2>
            <p className="mt-3 max-w-2xl text-base text-[#5A524C]">A snapshot of the technologies and concepts I am currently learning, practicing, or exploring as part of my IT journey.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">{skills.map((skill) => <article key={skill.title} className="rounded-2xl border border-[#E2DCCE] bg-[#EAE4D6]/40 p-6 sm:p-7"><div className="mb-5 flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#8B5E34]/20 bg-[#8B5E34]/10 text-2xl text-[#8B5E34]">{skill.icon}</div><div><h3 className="text-lg font-bold text-[#2C2724]">{skill.title}</h3><p className="mt-1 text-sm leading-6 text-[#6B635B]">{skill.description}</p></div></div><div className="flex flex-wrap gap-2">{skill.items.map((item) => <span key={item} className="rounded-lg border border-[#D0C8B8] bg-[#F5F2EB] px-3 py-2 text-xs font-semibold text-[#4A433D] hover:border-[#8B5E34] hover:text-[#8B5E34] transition-colors">{item}</span>)}</div></article>)}</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 bg-[#EAE4D6]/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E34]">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold text-[#2C2724] sm:text-4xl">Small Projects. Practical Learning. Real Progress.</h2>
            <p className="mt-3 max-w-2xl text-base text-[#5A524C]">These are learning concepts and portfolio examples. As I build and finish more projects, I will add live demos and source-code links here.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.number} className="overflow-hidden rounded-2xl border border-[#E2DCCE] bg-[#F5F2EB] shadow-sm hover:shadow-md transition-shadow"><div className="border-b border-[#E2DCCE] bg-[#EAE4D6] p-5"><div className="mb-6 flex items-center justify-between"><span className="rounded-lg border border-[#D0C8B8] bg-[#F5F2EB] px-3 py-1.5 font-mono text-xs text-[#6B635B]">{project.number} / PROJECT</span><span className="text-3xl">{project.icon}</span></div><div className="rounded-xl border border-[#D0C8B8] bg-[#F5F2EB] p-4"><p className="font-mono text-xs font-bold text-[#8B5E34]">{project.category}</p><p className="mt-2 text-lg font-bold text-[#2C2724]">{project.title}</p><p className="mt-1 text-xs text-[#7C7267]">{project.status}</p></div></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B5E34]">{project.category}</p><h3 className="mt-2 text-xl font-bold text-[#2C2724]">{project.title}</h3><p className="mt-3 min-h-[90px] text-sm leading-7 text-[#5A524C]">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md bg-[#EAE4D6] px-2.5 py-1.5 text-[11px] font-semibold text-[#4A433D]">{tag}</span>)}</div></div></article>)}</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 border-t border-[#E2DCCE]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E34]">Get in touch</p>
                <h2 className="mt-3 text-3xl font-bold text-[#2C2724] sm:text-4xl">Have an idea? Let&apos;s talk.</h2>
                <p className="mt-3 text-base text-[#5A524C]">I am open to connecting with fellow students, learning communities, and people who enjoy building useful things with technology.</p>
              </div>

              <div className="space-y-4">
                {/* Email with Copy Action */}
                <div onClick={copyEmail} className="cursor-pointer flex items-center justify-between rounded-xl border border-[#E2DCCE] bg-[#EAE4D6]/50 p-4 hover:border-[#8B5E34] transition-all">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8B5E34]/10 text-xl text-[#8B5E34]">✉</span>
                    <div>
                      <p className="text-xs text-[#7C7267]">Email Address</p>
                      <p className="mt-1 text-sm font-semibold text-[#2C2724]">{profile.email}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#8B5E34] px-2.5 py-1 rounded bg-[#F5F2EB] border border-[#D0C8B8]">
                    {copied ? "Copied! ✓" : "Copy"}
                  </span>
                </div>

                {/* All Social Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#E2DCCE] bg-[#EAE4D6]/50 p-3.5 transition hover:border-[#8B5E34]">
                    <span className="text-lg">🐙</span>
                    <span className="text-xs font-semibold text-[#2C2724]">GitHub ↗</span>
                  </a>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#E2DCCE] bg-[#EAE4D6]/50 p-3.5 transition hover:border-[#8B5E34]">
                    <span className="text-lg">💼</span>
                    <span className="text-xs font-semibold text-[#2C2724]">LinkedIn ↗</span>
                  </a>
                  <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#E2DCCE] bg-[#EAE4D6]/50 p-3.5 transition hover:border-[#8B5E34]">
                    <span className="text-lg">📸</span>
                    <span className="text-xs font-semibold text-[#2C2724]">Instagram ↗</span>
                  </a>
                  <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#E2DCCE] bg-[#EAE4D6]/50 p-3.5 transition hover:border-[#8B5E34]">
                    <span className="text-lg">🌐</span>
                    <span className="text-xs font-semibold text-[#2C2724]">Facebook ↗</span>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-[#E2DCCE] bg-[#F5F2EB] p-5 sm:p-8 shadow-sm">
              <div className="mb-7"><p className="text-lg font-bold text-[#2C2724]">Send a message</p><p className="mt-2 text-sm text-[#7C7267]">Complete the form and your default email app will open with your message.</p></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-[#4A433D]">Your name<input value={formData.name} onChange={(e) => updateField("name", e.target.value)} autoComplete="name" className="mt-2 w-full rounded-xl border border-[#D0C8B8] bg-[#F5F2EB] px-4 py-3 text-sm text-[#2C2724] outline-none transition placeholder:text-[#A09587] focus:border-[#8B5E34]" placeholder="Enter your name" /></label>
                <label className="block text-sm font-semibold text-[#4A433D]">Email address<input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} autoComplete="email" className="mt-2 w-full rounded-xl border border-[#D0C8B8] bg-[#F5F2EB] px-4 py-3 text-sm text-[#2C2724] outline-none transition placeholder:text-[#A09587] focus:border-[#8B5E34]" placeholder="you@example.com" /></label>
                <label className="block text-sm font-semibold text-[#4A433D] sm:col-span-2">Subject<input value={formData.subject} onChange={(e) => updateField("subject", e.target.value)} className="mt-2 w-full rounded-xl border border-[#D0C8B8] bg-[#F5F2EB] px-4 py-3 text-sm text-[#2C2724] outline-none transition placeholder:text-[#A09587] focus:border-[#8B5E34]" placeholder="What would you like to discuss?" /></label>
                <label className="block text-sm font-semibold text-[#4A433D] sm:col-span-2">Message<textarea rows={5} value={formData.message} onChange={(e) => updateField("message", e.target.value)} className="mt-2 w-full resize-y rounded-xl border border-[#D0C8B8] bg-[#F5F2EB] px-4 py-3 text-sm text-[#2C2724] outline-none transition placeholder:text-[#A09587] focus:border-[#8B5E34]" placeholder="Write your message here..." /></label>
              </div>
              {formError && <p role="alert" className="mt-5 rounded-lg border border-rose-300 bg-rose-50 p-3 text-sm text-rose-700">{formError}</p>}
              {formStatus && <p role="status" className="mt-5 rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-800">{formStatus}</p>}
              <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#8B5E34] px-6 py-3 text-sm font-bold text-[#F5F2EB] shadow-md transition hover:bg-[#6D4827]">Prepare Email <span>↗</span></button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E2DCCE] bg-[#EAE4D6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#8B5E34] text-xs font-black text-[#F5F2EB]">{profile.initials}</span>
            <span className="text-sm font-bold text-[#2C2724]">{profile.name}<span className="text-[#8B5E34]">.</span></span>
          </a>
          <p className="text-xs text-[#7C7267]">Designed with curiosity · Built while learning</p>
          <a href="#home" className="text-xs font-semibold text-[#8B5E34] transition hover:underline">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}