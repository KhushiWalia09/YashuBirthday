import photo1 from '../assets/Img 1.jpeg';
import photo2 from '../assets/WhatsApp Image 2026-05-31 at 6.25.02 PM.jpeg';
import photo3 from '../assets/Screenshot 2026-05-31 200814.png';
import photo4 from '../assets/Screenshot 2026-05-31 200848.png';
import photo5 from '../assets/Screenshot 2026-05-31 200919.png';

export const products = [
  {
    id: 1,
    title: 'Graceful Rooftop Portrait',
    price: 'Unlimited',
    desc: 'A quiet, elegant birthday rooftop portrait with a serene pose and bright horizon.',
    image: photo1,
    thumbnails: [photo2, photo3, photo4],
    bullets: [
      { label: 'ELEGANT GREEN ATTIRE', value: 'Features her dressed in a stunning, gracefully draped green outfit with delicate embroidery, radiating classic beauty.' },
      { label: 'SERENE ROOFTOP SETTING', value: 'Captured on a bright outdoor rooftop balcony, with a soft light-blue ambient backdrop and a calm breeze.' },
      { label: 'GRACEFUL EXPRESSION', value: 'Showcases a poised, serene expression framed by her long, flowing dark hair, reflecting raw elegance.' },
      { label: 'AESTHETIC KEEPSAKE', value: 'A gentle, high-resolution portrait that beautifully captures her poised stance and classic style.' }
    ]
  },
  {
    id: 2,
    title: 'Soft Evening Portrait',
    price: 'Unlimited',
    desc: 'A gentle celebration photo that captures the warm glow of the day.',
    image: photo2,
    thumbnails: [photo1, photo4, photo5],
    bullets: [
      { label: 'WARM GOLDEN HOUR', value: 'Captures the exact moment the evening sun casts a gentle, flattering glow on her expression.' },
      { label: 'QUIET SERENITY', value: 'Features a peaceful breeze and soft shadows, embodying calm reflection at the close of a beautiful birthday.' },
      { label: 'PASTEL TINT', value: 'Soft pinks and muted blues blend into the ambient background, offering a premium high-resolution aesthetic.' },
      { label: 'AESTHETIC ESSENCE', value: 'Ideal for celebrating the peaceful transition into a new year of growth and wisdom.' }
    ]
  },
  {
    id: 3,
    title: 'Golden Saree Glow',
    price: 'Unlimited',
    desc: 'A graceful birthday portrait with traditional colors and soft light.',
    image: photo3,
    thumbnails: [photo1, photo2, photo5],
    bullets: [
      { label: 'TRADITIONAL GRACE', value: 'Features beautiful, vibrant traditional ethnic attire with intricate golden borders, radiating classic elegance.' },
      { label: 'FESTIVE LIGHTING', value: 'Soft indoor spotlight reflection highlighting the rich color and patterns of the saree.' },
      { label: 'EXPRESSIVE ELEGANCE', value: 'Captures a graceful, confident posture reflecting celebration, cultural roots, and timeless style.' },
      { label: 'PERFECT CONTRAST', value: 'Harmonious blend of deep fabric tones with warm golden sparkles in the ambient atmosphere.' }
    ]
  },
  {
    id: 4,
    title: 'Balcony Daydream',
    price: 'Unlimited',
    desc: 'A candid moment on the balcony with a relaxed, natural mood.',
    image: photo4,
    thumbnails: [photo1, photo3, photo5],
    bullets: [
      { label: 'RELAXED CANDID', value: '100% natural daydreaming moment with zero forced posing, showing her relaxed state at home.' },
      { label: 'OPEN AIR AMBIANCE', value: 'Beautiful outdoor balcony backdrop offering refreshing natural lighting and a breezy background.' },
      { label: 'REFLECTIVE MOOD', value: 'Encourages peaceful daydreams and positive aspirations for the year ahead.' },
      { label: 'COMPOSITION DEPTH', value: 'Uses the balcony railing as a natural leading line to add incredible photographic depth to the memory.' }
    ]
  },
  {
    id: 5,
    title: '3:02 PM Celebration',
    price: 'Unlimited',
    desc: 'A bright birthday snapshot with a joyful vibe and soft shadows.',
    image: photo5,
    thumbnails: [photo1, photo2, photo4],
    bullets: [
      { label: 'HIGH NOON ENERGY', value: 'Bright afternoon sun casting crisp, playful shadows and filling the frame with energetic warmth.' },
      { label: 'JOYFUL SMILES', value: 'Captures a bright, joyful, laughter-filled moment at the peak hour of celebration.' },
      { label: 'VIBRANT DETAILS', value: 'High contrast and rich saturation emphasize the celebration mood and festive colors.' },
      { label: 'INSTANT MOOD BOOSTER', value: 'Radiates high positivity, cheer, and celebration, making it a stellar highlight of the collection.' }
    ]
  },
];
