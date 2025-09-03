import Navbar from "./components/Navbar"

function App() {
    return (
        <>
            <Navbar />
            <main className="p-6">
                <h2 className="text-2xl">Welcome to the Hackathon App 🚀</h2>
            </main>
        </>
    )
}

export default App

// pnpm run dev - run in developer mode
// pnpm build - build in production mode when we want to push
// pnpm start - to view the built production build
