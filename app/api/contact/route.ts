import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type Lead = {
  fullName: string;
  company: string;
  email: string;
  country: string;
  usage: string;
  interests: string[];
  message: string;
  timestamp: string;
};

const leadsFile = path.join(process.cwd(), 'data', 'leads.json');

async function saveLead(lead: Lead) {
  try {
    const existing = await fs.readFile(leadsFile, 'utf8').catch(() => '[]');
    const parsed = JSON.parse(existing) as Lead[];
    parsed.push(lead);
    await fs.writeFile(leadsFile, JSON.stringify(parsed, null, 2), 'utf8');
  } catch (error) {
    console.warn('Unable to write lead to file, logging instead.', error);
    console.log(JSON.stringify(lead, null, 2));
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  const lead: Lead = {
    fullName: body.fullName ?? '',
    company: body.company ?? '',
    email: body.email ?? '',
    country: body.country ?? '',
    usage: body.usage ?? '',
    interests: Array.isArray(body.interests) ? body.interests : [],
    message: body.message ?? '',
    timestamp: new Date().toISOString(),
  };

  await saveLead(lead);

  return NextResponse.json({ success: true });
}
