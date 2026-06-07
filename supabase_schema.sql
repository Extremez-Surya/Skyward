-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clerk_id TEXT UNIQUE NOT NULL,
    full_name TEXT,
    email TEXT UNIQUE,
    phone TEXT,
    role TEXT CHECK (role IN ('admin', 'manager', 'client', 'candidate')),
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CLIENTS TABLE
CREATE TABLE IF NOT EXISTS clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    contact_person TEXT,
    email TEXT,
    phone TEXT,
    industry TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CANDIDATES TABLE
CREATE TABLE IF NOT EXISTS candidates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    address TEXT,
    city TEXT,
    aadhaar_number TEXT UNIQUE,
    pan_number TEXT UNIQUE,
    experience TEXT,
    status TEXT DEFAULT 'screening',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- DOCUMENTS TABLE
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    candidate_id UUID REFERENCES candidates(id) ON DELETE CASCADE,
    document_type TEXT NOT NULL,
    document_url TEXT NOT NULL,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- JOB_REQUIREMENTS TABLE
CREATE TABLE IF NOT EXISTS job_requirements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    role_name TEXT NOT NULL,
    worker_count INTEGER DEFAULT 1,
    shift_type TEXT,
    location TEXT,
    salary TEXT,
    joining_date DATE,
    status TEXT DEFAULT 'open',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- DEPLOYMENTS TABLE
CREATE TABLE IF NOT EXISTS deployments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    candidate_id UUID REFERENCES candidates(id) ON DELETE CASCADE,
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    role TEXT,
    deployment_date DATE DEFAULT CURRENT_DATE,
    shift TEXT,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ATTENDANCE TABLE
CREATE TABLE IF NOT EXISTS attendance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    deployment_id UUID REFERENCES deployments(id) ON DELETE CASCADE,
    attendance_date DATE DEFAULT CURRENT_DATE,
    status TEXT CHECK (status IN ('present', 'absent', 'late', 'leave')),
    check_in TIMESTAMP WITH TIME ZONE,
    check_out TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- REPLACEMENT_REQUESTS TABLE
CREATE TABLE IF NOT EXISTS replacement_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    deployment_id UUID REFERENCES deployments(id) ON DELETE CASCADE,
    reason TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INVOICES TABLE
CREATE TABLE IF NOT EXISTS invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    invoice_number TEXT UNIQUE NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    gst DECIMAL(12, 2) DEFAULT 0,
    total_amount DECIMAL(12, 2) NOT NULL,
    due_date DATE,
    status TEXT DEFAULT 'unpaid',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies (Basic setup)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE deployments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE replacement_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Example policy: Users can read their own data
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (clerk_id = auth.uid()::text);
-- Note: Supabase auth.uid() is usually for Supabase Auth. 
-- Since we use Clerk, we might need a custom claim or just check the clerk_id.
-- For now, we'll leave detailed RLS for later when we define the Supabase/Clerk sync strategy.
