// ============================================================
// GOOGLE FORMS INTEGRATION CONFIG
// ============================================================
// Paste your Google Form's POST action URL here.
// To get it:
//   1. Open your Google Form > Send > <> (embed) OR view page source
//   2. Find the form action URL — it ends in "/formResponse"
//      e.g. https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse
//   3. Paste it below.
// ============================================================
export const GOOGLE_FORM_ACTION_URL = "";

// ============================================================
// Map each order field to its Google Form entry ID.
// To find each entry ID:
//   1. Open your Form, click "Get pre-filled link"
//   2. Fill in placeholder values, click "Get link"
//   3. The URL contains entry.XXXXXXXXX=value pairs — copy the IDs.
// ============================================================
export const GOOGLE_FORM_FIELDS = {
  orderRef:           "entry.000000001",
  orderDateTime:      "entry.000000002",
  customerName:       "entry.000000003",
  customerPhone:      "entry.000000004",
  customerEmail:      "entry.000000005",
  orderType:          "entry.000000006",
  deliveryAddress:    "entry.000000007",
  orderItems:         "entry.000000008",
  subtotal:           "entry.000000009",
  discount:           "entry.000000010",
  totalAmount:        "entry.000000011",
  specialInstructions:"entry.000000012",
};
