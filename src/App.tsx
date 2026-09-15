import { testAlias } from '@shared/lib/test-alias'

function App() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Melnikov Medical</h1>
            <p style={{ color: '#1CA7EC', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {testAlias}
            </p>
        </div>
    )
}

export default App