import { testAlias } from '@shared/lib/test-alias'

function App() {
    return (
        <div className="min-h-screen bg-bg-light flex items-center justify-center p-4">
            <div className="bg-white rounded-card shadow-card p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-navy mb-4">
                    Melnikov Medical
                </h1>
                <p className="text-primary font-semibold text-lg mb-6">
                    {testAlias}
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-input transition-colors duration-200 cursor-pointer">
                    Записаться на приём
                </button>
            </div>
        </div>
    )
}

export default App