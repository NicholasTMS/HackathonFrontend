// src/pages/CourseCreationForm.tsx
import React, { useMemo, useState } from "react";

type Mode = "self-paced" | "one-on-one";

type WeekDraft = {
    id: string;
    title: string;
    description?: string;
    files: File[]; // uploaded PDFs / MP4s
    videoLinks: string[]; // YouTube links or raw video links
};

type CourseDraft = {
    title: string;
    price: string;
    durationWeeks: number;
    mode: Mode;
    category?: string;
    level?: string;
    language?: string;
    shortDescription?: string;
    weeks: WeekDraft[];
};

const uid = (p = "") => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}${p}`;

const ProgressBar: React.FC<{ step: number; steps?: number }> = ({ step, steps = 3 }) => {
    const pct = Math.round(((step - 1) / (steps - 1)) * 100);
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-2">
                {Array.from({ length: steps }).map((_, i) => (
                    <div key={i} className={`text-sm ${i + 1 === step ? "font-semibold" : "text-gray-500"}`}>
                        Step {i + 1}
                    </div>
                ))}
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 rounded-full bg-indigo-600 transition-all"
                    style={{ width: `${pct}%` }}
                    aria-hidden
                />
            </div>
            <div className="mt-1 text-xs text-gray-500">{pct}% complete</div>
        </div>
    );
};

export default function CourseCreationForm() {
    const [step, setStep] = useState<number>(1);

    // initial draft
    const [draft, setDraft] = useState<CourseDraft>(() => ({
        title: "",
        price: "Free",
        durationWeeks: 4,
        mode: "self-paced",
        category: "Mathematics",
        level: "Beginner",
        language: "English",
        shortDescription: "",
        weeks: Array.from({ length: 4 }).map((_, i) => ({
            id: uid(String(i)),
            title: `Week ${i + 1}`,
            description: "",
            files: [],
            videoLinks: [],
        })),
    }));

    // helpers
    const validateStep1 = () => draft.title.trim().length > 0 && draft.durationWeeks > 0;
    const validateStep2 = () => draft.weeks.length > 0 && draft.weeks.every((w) => w.title.trim().length > 0);
    const canProceed = (target: number) => {
        if (target === 2) return validateStep1();
        if (target === 3) return validateStep1() && validateStep2();
        return true;
    };

    // update helpers
    const updateDraft = (patch: Partial<CourseDraft>) => setDraft((d) => ({ ...d, ...patch }));

    const updateWeek = (weekId: string, patch: Partial<WeekDraft>) =>
        setDraft((d) => ({
            ...d,
            weeks: d.weeks.map((w) => (w.id === weekId ? { ...w, ...patch } : w)),
        }));

    const addWeek = () => {
        setDraft((d) => {
            const newWeek: WeekDraft = { id: uid(), title: `Week ${d.weeks.length + 1}`, description: "", files: [], videoLinks: [] };
            const weeks = [...d.weeks, newWeek];
            const ret = weeks.map((wk, i) => ({ ...wk, title: wk.title || `Week ${i + 1}` }));
            return { ...d, weeks: ret };
        });
    };

    const removeWeek = (weekId: string) => {
        setDraft((d) => {
            const weeks = d.weeks.filter((w) => w.id !== weekId);
            const ret = weeks.map((wk, i) => ({ ...wk, title: wk.title || `Week ${i + 1}` }));
            return { ...d, weeks: ret };
        });
    };

    const setWeeksCount = (count: number) => {
        setDraft((d) => {
            const weeks = [...d.weeks];
            if (count <= 0) count = 1;
            if (weeks.length === count) return d;
            if (weeks.length < count) {
                while (weeks.length < count) {
                    weeks.push({ id: uid(), title: `Week ${weeks.length + 1}`, description: "", files: [], videoLinks: [] });
                }
            } else {
                weeks.length = count;
            }
            const ret = weeks.map((wk, i) => ({ ...wk, title: wk.title || `Week ${i + 1}` }));
            return { ...d, weeks: ret, durationWeeks: count };
        });
    };

    // file handlers for a week
    const handleFilesSelected = (weekId: string, files?: FileList | null) => {
        if (!files) return;
        const arr = Array.from(files);
        setDraft((d) => ({
            ...d,
            weeks: d.weeks.map((w) => (w.id === weekId ? { ...w, files: [...w.files, ...arr] } : w)),
        }));
    };

    const removeFileFromWeek = (weekId: string, fileIndex: number) => {
        setDraft((d) => ({
            ...d,
            weeks: d.weeks.map((w) =>
                w.id === weekId ? { ...w, files: w.files.filter((_, i) => i !== fileIndex) } : w
            ),
        }));
    };

    // video link add/remove
    const addVideoLink = (weekId: string, url: string) => {
        if (!url.trim()) return;
        setDraft((d) => ({
            ...d,
            weeks: d.weeks.map((w) => (w.id === weekId ? { ...w, videoLinks: [...w.videoLinks, url.trim()] } : w)),
        }));
    };
    const removeVideoLink = (weekId: string, idx: number) => {
        setDraft((d) => ({
            ...d,
            weeks: d.weeks.map((w) => (w.id === weekId ? { ...w, videoLinks: w.videoLinks.filter((_, i) => i !== idx) } : w)),
        }));
    };

    // final create
    const handleCreateCourse = () => {
        // TODO: call API to create course; currently logs to console
        const created = {
            ...draft,
            createdAt: new Date().toISOString(),
        };
        console.log("Creating course:", created);
        alert("Course created — check console for payload. Replace alert with real API call.");
        // optionally reset or navigate
    };

    // derived summary
    const totalMaterials = useMemo(
        () => draft.weeks.reduce((acc, w) => acc + w.files.length + w.videoLinks.length, 0),
        [draft.weeks]
    );

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <div className="mb-2">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setStep(1)}
                        className={`px-3 py-1 rounded ${step === 1 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
                    >
                        1
                    </button>
                    <button
                        onClick={() => canProceed(2) && setStep(2)}
                        className={`px-3 py-1 rounded ${step === 2 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
                    >
                        2
                    </button>
                    <button
                        onClick={() => canProceed(3) && setStep(3)}
                        className={`px-3 py-1 rounded ${step === 3 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
                    >
                        3
                    </button>
                    <div className="ml-auto text-sm text-gray-600">Progress</div>
                </div>
                <div className="mt-3">
                    <ProgressBar step={step} steps={3} />
                </div>
            </div>

            {/* Step content */}
            {step === 1 && (
                <section className="bg-white rounded shadow p-6">
                    <h2 className="text-2xl font-semibold mb-4">Course Details</h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium">Course Title *</label>
                            <input
                                value={draft.title}
                                onChange={(e) => updateDraft({ title: e.target.value })}
                                className="mt-1 block w-full border rounded px-3 py-2"
                                placeholder="e.g., Complete React & TypeScript Guide"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Price</label>
                            <input
                                value={draft.price}
                                onChange={(e) => updateDraft({ price: e.target.value })}
                                className="mt-1 block w-full border rounded px-3 py-2"
                                placeholder="Free or 49.99"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Length (weeks) *</label>
                            <input
                                type="number"
                                min={1}
                                value={draft.durationWeeks}
                                onChange={(e) => {
                                    const n = Math.max(1, Number(e.target.value) || 1);
                                    setWeeksCount(n);
                                }}
                                className="mt-1 block w-full border rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Mode</label>
                            <select
                                value={draft.mode}
                                onChange={(e) => updateDraft({ mode: e.target.value as Mode })}
                                className="mt-1 block w-full border rounded px-3 py-2"
                            >
                                <option value="self-paced">Self-paced (materials only)</option>
                                <option value="one-on-one">1-on-1 Tutoring (optional)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Category</label>
                            <input
                                value={draft.category}
                                onChange={(e) => updateDraft({ category: e.target.value })}
                                className="mt-1 block w-full border rounded px-3 py-2"
                                placeholder="e.g., Mathematics"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Level</label>
                            <select
                                value={draft.level}
                                onChange={(e) => updateDraft({ level: e.target.value })}
                                className="mt-1 block w-full border rounded px-3 py-2"
                            >
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Language</label>
                            <input
                                value={draft.language}
                                onChange={(e) => updateDraft({ language: e.target.value })}
                                className="mt-1 block w-full border rounded px-3 py-2"
                                placeholder="English"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium">Short Description</label>
                            <textarea
                                value={draft.shortDescription}
                                onChange={(e) => updateDraft({ shortDescription: e.target.value })}
                                className="mt-1 block w-full border rounded px-3 py-2"
                                rows={3}
                                placeholder="Quick summary to show on course listing (max 250 chars)"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <div />
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    if (!validateStep1()) {
                                        alert("Please provide a course title and set weeks >= 1.");
                                        return;
                                    }
                                    setStep(2);
                                }}
                                className="px-4 py-2 bg-indigo-600 text-white rounded"
                            >
                                Next: Weeks
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {step === 2 && (
                <section className="bg-white rounded shadow p-6">
                    <h2 className="text-2xl font-semibold mb-2">Weekly Curriculum</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Define each week's title, optional description and upload materials (PDFs / MP4s) or add YouTube links.
                    </p>

                    <div className="mb-4 flex items-center gap-3">
                        <label className="text-sm">Auto-set number of weeks:</label>
                        <input
                            type="number"
                            min={1}
                            value={draft.durationWeeks}
                            onChange={(e) => setWeeksCount(Math.max(1, Number(e.target.value) || 1))}
                            className="w-20 px-2 py-1 border rounded"
                        />
                        <button
                            onClick={() => addWeek()}
                            className="ml-auto px-3 py-1 bg-green-600 text-white rounded"
                        >
                            + Add Week
                        </button>
                    </div>

                    <div className="space-y-6">
                        {draft.weeks.map((week, idx) => (
                            <div key={week.id} className="border rounded p-4">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold">Week {idx + 1}</h3>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => removeWeek(week.id)}
                                            className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="grid gap-3 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium">Title *</label>
                                        <input
                                            value={week.title}
                                            onChange={(e) => updateWeek(week.id, { title: e.target.value })}
                                            className="mt-1 block w-full border rounded px-3 py-2"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Optional Description</label>
                                        <input
                                            value={week.description}
                                            onChange={(e) => updateWeek(week.id, { description: e.target.value })}
                                            className="mt-1 block w-full border rounded px-3 py-2"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium">Upload files (PDF / MP4)</label>
                                        <input
                                            type="file"
                                            multiple
                                            accept=".pdf,video/mp4,video/*"
                                            onChange={(e) => handleFilesSelected(week.id, e.target.files)}
                                            className="mt-1 block w-full text-sm text-gray-600"
                                        />
                                        {week.files.length > 0 && (
                                            <ul className="mt-2 space-y-1">
                                                {week.files.map((f, i) => (
                                                    <li key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                                        <span className="text-sm">{f.name}</span>
                                                        <button
                                                            onClick={() => removeFileFromWeek(week.id, i)}
                                                            className="text-red-600 text-xs px-2 py-1"
                                                            type="button"
                                                        >
                                                            Remove
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium">Add video link (YouTube / MP4 URL)</label>
                                        <VideoLinkInput
                                            onAdd={(url) => addVideoLink(week.id, url)}
                                        />
                                        {week.videoLinks.length > 0 && (
                                            <ul className="mt-2 space-y-1">
                                                {week.videoLinks.map((v, i) => (
                                                    <li key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                                        <a href={v} target="_blank" rel="noreferrer" className="text-sm text-indigo-600">{v}</a>
                                                        <button onClick={() => removeVideoLink(week.id, i)} className="text-red-600 text-xs px-2 py-1" type="button">Remove</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button onClick={() => setStep(1)} className="px-4 py-2 border rounded">Back</button>
                        <div className="flex gap-3">
                            <button onClick={() => setStep(1)} className="px-4 py-2 border rounded">Edit Course Info</button>
                            <button
                                onClick={() => {
                                    if (!validateStep2()) {
                                        alert("Please ensure every week has a title.");
                                        return;
                                    }
                                    setStep(3);
                                }}
                                className="px-4 py-2 bg-indigo-600 text-white rounded"
                            >
                                Next: Review
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {step === 3 && (
                <section className="bg-white rounded shadow p-6">
                    <h2 className="text-2xl font-semibold mb-4">Review & Create</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold">Course Info</h3>
                            <p><strong>Title:</strong> {draft.title || "—"}</p>
                            <p><strong>Price:</strong> {draft.price}</p>
                            <p><strong>Length:</strong> {draft.durationWeeks} weeks</p>
                            <p><strong>Mode:</strong> {draft.mode === "one-on-one" ? "1-on-1 Tutoring" : "Self-paced"}</p>
                            <p><strong>Category:</strong> {draft.category}</p>
                            <p><strong>Level:</strong> {draft.level}</p>
                            <p className="mt-2 text-sm text-gray-600">{draft.shortDescription}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Summary</h3>
                            <p><strong>Weeks:</strong> {draft.weeks.length}</p>
                            <p><strong>Total materials/links:</strong> {totalMaterials}</p>
                            <p className="text-sm text-gray-500 mt-2">Preview each week's title and materials below.</p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        {draft.weeks.map((w, i) => (
                            <div key={w.id} className="border rounded p-3">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-semibold">Week {i + 1}: {w.title}</div>
                                        <div className="text-sm text-gray-600">{w.description}</div>
                                    </div>
                                    <div className="text-sm text-gray-500">{w.files.length} files • {w.videoLinks.length} links</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button onClick={() => setStep(2)} className="px-4 py-2 border rounded">Back</button>

                        <div className="flex gap-3">
                            <button onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="px-4 py-2 border rounded">Edit Info</button>
                            <button
                                onClick={() => {
                                    // final validation
                                    if (!validateStep1()) { alert("Course must have a title and valid weeks."); setStep(1); return; }
                                    if (!validateStep2()) { alert("Ensure each week has a title."); setStep(2); return; }
                                    handleCreateCourse();
                                }}
                                className="px-4 py-2 bg-green-600 text-white rounded"
                            >
                                Create Course
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

/* Small helper component for adding a single video link input */
function VideoLinkInput({ onAdd }: { onAdd: (url: string) => void }) {
    const [val, setVal] = useState("");
    return (
        <div className="flex gap-2 items-start">
            <input
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="https://youtube.com/..."
                className="flex-1 border rounded px-3 py-2"
            />
            <button
                type="button"
                onClick={() => {
                    if (!val.trim()) return;
                    onAdd(val.trim());
                    setVal("");
                }}
                className="px-3 py-2 bg-indigo-600 text-white rounded"
            >
                Add
            </button>
        </div>
    );
}
