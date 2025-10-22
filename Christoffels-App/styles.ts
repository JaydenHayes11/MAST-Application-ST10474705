import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f1f2f3',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    color: '#222',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  pill: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  pillText: {
    color: '#333',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  paragraph: {
    color: '#303037',
    lineHeight: 20,
  },
  primaryBtn: {
    backgroundColor: '#e53935',
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '800',
  },


  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
    color: '#222',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#d1d5db',
    marginRight: 10,
  },
  itemName: { fontSize: 14, fontWeight: '700', color: '#222' },
  itemDesc: { fontSize: 12, color: '#666', marginTop: 2 },
  pricePill: {
    backgroundColor: '#ef5350',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  pricePillText: { color: 'white', fontWeight: '800' },
  avgPrice: { marginTop: 6, color: '#444', fontWeight: '600' },
  rowBetween: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBtnText: { fontSize: 18, fontWeight: '900', color: '#333' },
});

export default s;