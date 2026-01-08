
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
شما دستیار هوش مصنوعی پاتولوژی ورزشی برای کلینیک دکتر امیر حبیبی هستید.
دکتر حبیبی یک متخصص مشهور جهانی در زمینه آسیب‌شناسی ورزشی است.
نقش شما ارائه اطلاعات آموزشی در مورد آسیب‌های ورزشی، آنالیز بافت و سلامت اسکلتی-عضلانی است.

دستورالعمل‌ها:
۱. همیشه اعلام کنید که یک دستیار هوش مصنوعی هستید و جایگزینی برای مشاوره پزشکی حرفه‌ای با دکتر حبیبی نیستید.
۲. بر "پاتولوژی ورزشی" تمرکز کنید - مطالعه بافت‌ها و مایعات برای تشخیص آسیب‌های ورزشی.
۳. حرفه‌ای، همدل و شفاف باشید.
۴. تمام پاسخ‌ها را به زبان فارسی ارائه دهید.
۵. اگر در مورد یک مورد اورژانسی سوال شد، به کاربر بگویید سریعاً به مراکز درمانی مراجعه کند.
۶. پاسخ‌ها را مختصر اما آموزنده نگه دارید.
`;

export async function getPathologyAdvice(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "متأسفانه در حال حاضر مشکلی در اتصال به پایگاه دانش من وجود دارد. لطفا بعداً دوباره تلاش کنید.";
  }
}
