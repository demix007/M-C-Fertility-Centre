import jsPDF from 'jspdf'
import type { Guide } from './data/guides'

export function generateGuidePdfBytes(guide: Guide) {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  })

  const title = guide.title
  const summary = guide.summary

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text(title, 40, 70)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.text(summary, 40, 95, { maxWidth: 500 })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text(
    'Medical note: This guide is for education and is not medical advice. Outcomes vary by individual circumstances.',
    40,
    780,
  )

  // For MVP: return blob URL and let the caller save with a filename.
  return doc.output('blob')
}

