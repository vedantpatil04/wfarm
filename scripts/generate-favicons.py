import io
import os
import struct
from PIL import Image, ImageDraw

PUBLIC_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public')

def generate_svg():
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
  <!-- Square warm-grey/ivory surface with subtle border for high contrast in light & dark browser tabs -->
  <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="5" fill="#F4F1EA" stroke="#14181F" stroke-opacity="0.14" stroke-width="1.5" />
  
  <!-- Subtle warm-yellow brand accent -->
  <rect x="23" y="6" width="3" height="3" rx="0.5" fill="#FFB800" />
  
  <!-- Clean geometric editorial WF lettering -->
  <path d="M6 10.5L8.2 21H10.5L12 14.5L13.5 21H15.8L18 10.5H16L14.7 17.5L13.2 10.5H10.8L9.3 17.5L8 10.5H6Z" fill="#14181F" />
  <path d="M19.5 10.5H25.5V12.6H21.7V15H24.8V17H21.7V21H19.5V10.5Z" fill="#14181F" />
</svg>
'''
    svg_path = os.path.join(PUBLIC_DIR, 'favicon.svg')
    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"Written: {svg_path}")

def render_badge(size, rx_val=5.0, stroke_w=1.4, dot_size=3.0, scale=32):
    s = size * scale
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    f = s / 32.0
    
    # Outer rounded rectangle
    margin = (stroke_w / 2.0) * f
    draw.rounded_rectangle(
        [margin, margin, s - margin, s - margin],
        radius=rx_val * f,
        fill=(244, 241, 234, 255),  # Warm ivory #F4F1EA
        outline=(20, 24, 31, 38),   # Subtle dark outline for light tab bars
        width=max(1, int(round(stroke_w * f)))
    )
    
    # Yellow accent
    dx = 23.0 * f
    dy = 6.0 * f
    dw = dot_size * f
    draw.rounded_rectangle(
        [dx, dy, dx + dw, dy + dw],
        radius=0.6 * f,
        fill=(255, 184, 0, 255)  # Warm yellow #FFB800
    )
    
    # W coordinates (32x32 space)
    w_pts = [
        (6.0, 10.5), (8.2, 21.0), (10.5, 21.0), (12.0, 14.5),
        (13.5, 21.0), (15.8, 21.0), (18.0, 10.5), (16.0, 10.5),
        (14.7, 17.5), (13.2, 10.5), (10.8, 10.5), (9.3, 17.5),
        (8.0, 10.5)
    ]
    draw.polygon([(x * f, y * f) for x, y in w_pts], fill=(20, 24, 31, 255))
    
    # F coordinates (32x32 space)
    f_pts = [
        (19.5, 10.5), (25.5, 10.5), (25.5, 12.6), (21.7, 12.6),
        (21.7, 15.0), (24.8, 15.0), (24.8, 17.0), (21.7, 17.0),
        (21.7, 21.0), (19.5, 21.0)
    ]
    draw.polygon([(x * f, y * f) for x, y in f_pts], fill=(20, 24, 31, 255))
    
    return img.resize((size, size), Image.Resampling.LANCZOS)

def render_tuned_16(scale=32):
    s = 16 * scale
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    f = s / 16.0

    # Rounded box
    margin = 0.5 * f
    draw.rounded_rectangle(
        [margin, margin, s - margin, s - margin],
        radius=2.5 * f,
        fill=(244, 241, 234, 255),
        outline=(20, 24, 31, 38),
        width=int(round(0.8 * f))
    )

    # Yellow dot at top right
    draw.rounded_rectangle(
        [11.5 * f, 2.5 * f, 13.5 * f, 4.5 * f],
        radius=0.4 * f,
        fill=(255, 184, 0, 255)
    )

    # W: x=2.5 to 8.5, y=5.0 to 11.5
    w_pts = [
        (2.5, 5.0), (3.7, 11.5), (5.1, 11.5), (6.0, 7.5),
        (6.9, 11.5), (8.3, 11.5), (9.5, 5.0), (8.2, 5.0),
        (7.4, 9.2), (6.6, 5.0), (5.4, 5.0), (4.6, 9.2),
        (3.8, 5.0)
    ]
    draw.polygon([(x * f, y * f) for x, y in w_pts], fill=(20, 24, 31, 255))

    # F: x=10.0 to 13.5, y=5.0 to 11.5
    f_pts = [
        (10.0, 5.0), (13.5, 5.0), (13.5, 6.3), (11.3, 6.3),
        (11.3, 7.7), (13.0, 7.7), (13.0, 8.9), (11.3, 8.9),
        (11.3, 11.5), (10.0, 11.5)
    ]
    draw.polygon([(x * f, y * f) for x, y in f_pts], fill=(20, 24, 31, 255))

    return img.resize((16, 16), Image.Resampling.LANCZOS)

def render_apple_touch_icon(scale=8):
    # Apple Touch Icon: 180x180, solid warm ivory background (#F4F1EA)
    # The solid background ensures iOS squircle clipping produces clean corners without black borders.
    size = 180
    s = size * scale
    img = Image.new('RGBA', (s, s), (244, 241, 234, 255))
    draw = ImageDraw.Draw(img)
    f = s / 32.0
    
    # In 32x32 space, yellow dot is x=23..26, y=6..9
    dx = 23.0 * f
    dy = 6.0 * f
    dw = 3.0 * f
    draw.rounded_rectangle(
        [dx, dy, dx + dw, dy + dw],
        radius=0.6 * f,
        fill=(255, 184, 0, 255)
    )
    
    # W coordinates
    w_pts = [
        (6.0, 10.5), (8.2, 21.0), (10.5, 21.0), (12.0, 14.5),
        (13.5, 21.0), (15.8, 21.0), (18.0, 10.5), (16.0, 10.5),
        (14.7, 17.5), (13.2, 10.5), (10.8, 10.5), (9.3, 17.5),
        (8.0, 10.5)
    ]
    draw.polygon([(x * f, y * f) for x, y in w_pts], fill=(20, 24, 31, 255))
    
    # F coordinates
    f_pts = [
        (19.5, 10.5), (25.5, 10.5), (25.5, 12.6), (21.7, 12.6),
        (21.7, 15.0), (24.8, 15.0), (24.8, 17.0), (21.7, 17.0),
        (21.7, 21.0), (19.5, 21.0)
    ]
    draw.polygon([(x * f, y * f) for x, y in f_pts], fill=(20, 24, 31, 255))
    
    return img.resize((size, size), Image.Resampling.LANCZOS)

def create_ico(images, output_path):
    raw_pngs = []
    for img in images:
        buf = io.BytesIO()
        img.save(buf, format='PNG')
        raw_pngs.append((img.width, img.height, buf.getvalue()))
        
    num_images = len(raw_pngs)
    header = struct.pack('<HHH', 0, 1, num_images)
    
    entries = []
    offset = 6 + 16 * num_images
    data_bytes = bytearray()
    
    for w, h, data in raw_pngs:
        width_byte = w if w < 256 else 0
        height_byte = h if h < 256 else 0
        entry = struct.pack('<BBBBHHII', width_byte, height_byte, 0, 0, 1, 32, len(data), offset)
        entries.append(entry)
        data_bytes += data
        offset += len(data)
        
    with open(output_path, 'wb') as f:
        f.write(header)
        for e in entries:
            f.write(e)
        f.write(data_bytes)
    print(f"Written: {output_path}")

def main():
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    # 1. SVG
    generate_svg()
    
    # 2. 32x32 PNG
    im32 = render_badge(32)
    p32 = os.path.join(PUBLIC_DIR, 'favicon-32x32.png')
    im32.save(p32)
    print(f"Written: {p32}")
    
    # 3. 16x16 PNG
    im16 = render_tuned_16()
    p16 = os.path.join(PUBLIC_DIR, 'favicon-16x16.png')
    im16.save(p16)
    print(f"Written: {p16}")
    
    # 4. Apple Touch Icon 180x180 PNG
    im180 = render_apple_touch_icon()
    p180 = os.path.join(PUBLIC_DIR, 'apple-touch-icon.png')
    im180.save(p180)
    print(f"Written: {p180}")
    
    # 5. Multi-size ICO (16x16, 32x32, 48x48)
    im48 = render_badge(48)
    p_ico = os.path.join(PUBLIC_DIR, 'favicon.ico')
    create_ico([im16, im32, im48], p_ico)
    
    # 6. Web Manifest
    manifest_content = '''{
  "name": "WebFarm",
  "short_name": "WebFarm",
  "icons": [
    {
      "src": "/favicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "/favicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ],
  "theme_color": "#F4F1EA",
  "background_color": "#F4F1EA",
  "display": "standalone"
}
'''
    p_manifest = os.path.join(PUBLIC_DIR, 'site.webmanifest')
    with open(p_manifest, 'w', encoding='utf-8') as f:
        f.write(manifest_content)
    print(f"Written: {p_manifest}")

if __name__ == '__main__':
    main()
