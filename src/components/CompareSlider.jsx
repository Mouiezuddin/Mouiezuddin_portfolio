import { useState } from 'react'

export default function CompareSlider() {
  const [sliderPos, setSliderPos] = useState(50)

  const slowCode = `# UNOPTIMIZED DJANGO QUERY (N+1 PROBLEM)
# Response Latency: 800ms
# CPU Load: 85%

def get_library_data(request):
    # Triggers query for each book's author
    books = Book.objects.all() 
    data = []
    for b in books:
        data.append({
            'title': b.title,
            # Query triggered here! (N Queries)
            'author': b.author.name, 
            'reviews': [r.text for r in b.reviews.all()] 
        })
    return JsonResponse(data, safe=False)`

  const fastCode = `# OPTIMIZED DRF QUERY (PREFETCHED & INDEXED)
# Response Latency: 200ms (75% Reduction)
# CPU Load: 15%

def get_library_data(request):
    # Combined with select_related & prefetch_related
    # 2 queries total instead of N + 1
    books = Book.objects.select_related('author')\\
                        .prefetch_related('reviews')\\
                        .all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)`

  return (
    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px', width: '100%', maxWidth: '850px', margin: '2rem auto', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
        <span className="mono-label" style={{ color: 'var(--primary)' }}>[ OPTIMIZATION_COMPARATOR ]</span>
        <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>DRAG SLIDER TO VERIFY</span>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#02070d', userSelect: 'none' }}>
        
        {/* Right Pane (Fast/Optimized) - Full Width underneath */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: '1.5rem', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.2rem 0.5rem', border: '1px solid rgba(56, 189, 248, 0.3)', backgroundColor: 'rgba(56, 189, 248, 0.05)', borderRadius: '4px' }}>
              ✓ OPTIMIZED // CACHED_API
            </span>
            <span style={{ color: 'var(--secondary)', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>200ms LATENCY</span>
          </div>
          <pre style={{ margin: 0, padding: 0, color: '#e2e8f0', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: '1.5', textAlign: 'left', overflow: 'hidden' }}>
            <code>{fastCode}</code>
          </pre>
        </div>

        {/* Left Pane (Slow/Unoptimized) - Width set by slider position */}
        <div style={{ position: 'absolute', inset: 0, width: `${sliderPos}%`, height: '100%', overflow: 'hidden', padding: '1.5rem', boxSizing: 'border-box', backgroundColor: '#040d1a', borderRight: '2px solid var(--primary)', zIndex: 2 }}>
          {/* Prevent text wrapping when container is narrow */}
          <div style={{ width: '800px', height: '100%' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.2rem 0.5rem', border: '1px solid rgba(245, 166, 35, 0.3)', backgroundColor: 'rgba(245, 166, 35, 0.05)', borderRadius: '4px' }}>
                ⚠ UNOPTIMIZED // N+1_QUERY
              </span>
              <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>800ms LATENCY</span>
            </div>
            <pre style={{ margin: 0, padding: 0, color: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: '1.5', textAlign: 'left', overflow: 'hidden' }}>
              <code>{slowCode}</code>
            </pre>
          </div>
        </div>

        {/* Glassmorphic Slider Drag Handle Button */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: `${sliderPos}%`, 
            transform: 'translate(-50%, -50%)', 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            background: 'rgba(12, 33, 56, 0.75)', 
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--primary)', 
            boxShadow: '0 0 10px var(--primary-glow)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 3, 
            pointerEvents: 'none' 
          }}
        >
          <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 'bold' }}>&lt;&gt;</span>
        </div>

        {/* Invisible Slider Input covering the area */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPos} 
          onChange={(e) => setSliderPos(Number(e.target.value))}
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            opacity: 0, 
            cursor: 'ew-resize', 
            zIndex: 4,
            margin: 0
          }} 
        />

      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
        <div style={{ textAlign: 'left', padding: '0.75rem', border: '1px solid rgba(245,166,35,0.08)', background: 'rgba(245,166,35,0.02)', borderRadius: '6px' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)' }}>DATABASE_API_LATENCY</div>
          <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', fontWeight: 'bold' }}>- 75% RESPONSE_TIME</div>
        </div>
        <div style={{ textAlign: 'left', padding: '0.75rem', border: '1px solid rgba(56,189,248,0.08)', background: 'rgba(56,189,248,0.02)', borderRadius: '6px' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)' }}>ORM_COMPILATION_LOAD</div>
          <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--secondary)', fontWeight: 'bold' }}>83% SAVED_SERVER_CYCLES</div>
        </div>
      </div>
    </div>
  )
}
