/**
 * WhatsApp Integration Utility for ARESSA GOLDEN FARM Export Desk
 */
export const PHONE_NUMBER = '6281234567890'; // Commercial Desk WhatsApp

export const createWhatsAppLink = (message = '') => {
  const encodedMsg = encodeURIComponent(message || 'Hello Aressa Golden Farm Export Desk, I would like to inquire about palm sugar products.');
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMsg}`;
};

export const createProductWhatsAppLink = (productName, lang = 'en') => {
  const msg = lang === 'id'
    ? `Halo ARESSA GOLDEN FARM, saya tertarik dengan produk ${productName}. Mohon info spesifikasi, kemasan, MOQ, dan harga ekspor/domestik. Terima kasih.`
    : `Hello ARESSA GOLDEN FARM, I am interested in your ${productName}. I would like to request product specification, packaging details, MOQ, and export pricing. Thank you.`;
  return createWhatsAppLink(msg);
};

export const createCustomRFQWhatsAppLink = ({ product, volume, incoterm, destination, notes }, lang = 'en') => {
  if (lang === 'id') {
    const lines = [
      'Halo Export Desk ARESSA GOLDEN FARM,',
      'Saya ingin mengajukan Permintaan Penawaran (RFQ):',
      `- Produk: ${product || 'Gula Aren Semut Organik'}`,
      `- Estimasi Volume: ${volume || '1 Container 20ft (~15 MT)'}`,
      `- Syarat Pengiriman: ${incoterm || 'FOB Pelabuhan Samarinda'}`,
      `- Negara/Pelabuhan Tujuan: ${destination || 'Singapura'}`,
      notes ? `- Catatan Khusus: ${notes}` : '',
      'Mohon kirimkan Penawaran Resmi (Proforma Invoice & COA). Terima kasih.'
    ].filter(Boolean).join('\n');
    return createWhatsAppLink(lines);
  }

  const lines = [
    'Hello ARESSA GOLDEN FARM Export Desk,',
    'I would like to submit a formal Request for Quotation (RFQ):',
    `- Product Grade: ${product || 'Organic Granulated Palm Sugar'}`,
    `- Estimated Volume: ${volume || '20ft FCL Container (~15 MT)'}`,
    `- Incoterms: ${incoterm || 'FOB Samarinda Port'}`,
    `- Destination Port/Country: ${destination || 'Port of Rotterdam, Netherlands'}`,
    notes ? `- Special Requirements: ${notes}` : '',
    'Please send formal Proforma Quotation and preliminary COA. Thank you.'
  ].filter(Boolean).join('\n');

  return createWhatsAppLink(lines);
};
