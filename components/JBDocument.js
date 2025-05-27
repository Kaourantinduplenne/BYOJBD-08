import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 12 },
});

export function JBDDocument({ data }) {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text>Rig: {String(data?.rig)}</Text>
        <Text>Operation: {String(data?.operation)}</Text>
        <Text>PIC: {String(data?.pic)}</Text>
        <Text>LOF Hazard: {String(data?.lofHazard)}</Text>
        <Text>Personnel: {data?.workers?.join(', ')}</Text>
        {data?.tasks?.map((t, i) => (
          <Text key={i}>{i + 1}. {t.step} (By: {t.persons.join(', ')})</Text>
        ))}
      </Page>
    </Document>
  );
}
