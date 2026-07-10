-- Content Engine paywall: subscription state, one row per user.
-- Run this ONCE in the Supabase project used for login
-- (https://apyqiknzupoatumizbso.supabase.co -> SQL Editor -> paste -> Run).

create table if not exists public.ce_subscriptions (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text,
  paid_until timestamptz,
  last_payment_id text,
  last_order_id text,
  amount_inr integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.ce_subscriptions enable row level security;

-- Users may READ their own row (so the app can show "active till ...").
drop policy if exists "read own subscription" on public.ce_subscriptions;
create policy "read own subscription"
  on public.ce_subscriptions for select
  using (auth.uid() = user_id);

-- No insert/update/delete policies: only the backend (service_role key,
-- which bypasses RLS) can write. Payments cannot be faked from the browser.
