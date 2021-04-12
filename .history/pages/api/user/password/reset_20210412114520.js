import bcrypt from 'bcrypt';
import nc from 'next-connect'
import { sendMail } from '@/lib/mail'
import { database } from '@'