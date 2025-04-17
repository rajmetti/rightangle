import { Injectable, provideExperimentalZonelessChangeDetection } from '@angular/core';
import {
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js'


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient('http://localhost:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE')
  }

  async client() {
    try {
      const { data, error } = await this.supabase
        .from('no_places')
        .select('*');

      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
}