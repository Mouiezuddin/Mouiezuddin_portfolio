import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeCanvas({ primaryColor = '#f5a623', secondaryColor = '#38bdf8', mutedColor = '#94a3b8' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    
    let width = window.innerWidth
    let height = window.innerHeight
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 50

    const keywords = [
      "PYTHON", "DJANGO", "FLASK", "REACT", "DRF", "POSTGRESQL",
      "DOCKER", "API DESIGN", "JWT AUTH", "REST API", "SQL",
      "RBAC", "GITHUB", "UNIT TESTS", "LATENCY", "FULL STACK"
    ]

    const group = new THREE.Group()
    scene.add(group)

    function createTextTexture(text, color) {
      const textCanvas = document.createElement('canvas')
      const ctx = textCanvas.getContext('2d')
      textCanvas.width = 256
      textCanvas.height = 64
      ctx.fillStyle = color
      ctx.font = 'bold 26px "JetBrains Mono", monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = color
      ctx.shadowBlur = 10
      ctx.fillText(text, 128, 32)
      return new THREE.CanvasTexture(textCanvas)
    }

    const sprites = []
    const count = 35
    for (let i = 0; i < count; i++) {
      const word = keywords[i % keywords.length]
      const colors = [primaryColor, secondaryColor, mutedColor]
      const color = colors[i % colors.length]
      const texture = createTextTexture(word, color)
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.6,
        depthWrite: false
      })
      const sprite = new THREE.Sprite(material)
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const radius = 30
      sprite.position.x = radius * Math.cos(theta) * Math.sin(phi)
      sprite.position.y = radius * Math.sin(theta) * Math.sin(phi)
      sprite.position.z = radius * Math.cos(phi)
      sprite.scale.set(12, 3, 1)
      sprite.userData = {
        speedX: (Math.random() - 0.5) * 0.005,
        speedY: (Math.random() - 0.5) * 0.005
      }
      group.add(sprite)
      sprites.push(sprite)
    }

    function hexToRGB(hex) {
      const r = parseInt(hex.slice(1, 3), 16) / 255
      const g = parseInt(hex.slice(3, 5), 16) / 255
      const b = parseInt(hex.slice(5, 7), 16) / 255
      return { r, g, b }
    }

    const particleCount = 120
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)
    const c1 = hexToRGB(primaryColor)
    const c2 = hexToRGB(secondaryColor)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 120
      positions[i + 1] = (Math.random() - 0.5) * 120
      positions[i + 2] = (Math.random() - 0.5) * 120
      const usePrimary = Math.random() > 0.5
      particleColors[i] = usePrimary ? c1.r : c2.r
      particleColors[i + 1] = usePrimary ? c1.g : c2.g
      particleColors[i + 2] = usePrimary ? c1.b : c2.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const pMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    })

    const particles = new THREE.Points(geometry, pMaterial)
    scene.add(particles)

    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0003
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0003
    }
    window.addEventListener('mousemove', handleMouseMove)

    let animationFrameId
    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      group.rotation.y += 0.0012
      group.rotation.x += 0.0006
      group.rotation.y += (mouseX - group.rotation.y) * 0.05
      group.rotation.x += (mouseY - group.rotation.x) * 0.05
      particles.rotation.y -= 0.0005
      particles.rotation.z += 0.0002
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      pMaterial.dispose()
      sprites.forEach(sprite => {
        sprite.material.map.dispose()
        sprite.material.dispose()
      })
    }
  }, [primaryColor, secondaryColor, mutedColor])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.3
      }}
    />
  )
}
