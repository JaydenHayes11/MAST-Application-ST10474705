import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import s from '../styles';
import { Course, MenuItem } from '../types';
import { useMenu } from '../MenuContext';
import { nanoid } from 'nanoid/non-secure';

export default function MenuManagePage() {}