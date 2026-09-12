import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer"
import {
  contact,
  earlierRoles,
  education,
  experience,
  featuredProject,
  publications,
} from "@/lib/resume-data"

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.4,
    color: "#1a1a1a",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {
    flex: 1,
    paddingRight: 16,
  },
  qrBlock: {
    alignItems: "center",
    width: 74,
  },
  qr: {
    width: 66,
    height: 66,
  },
  qrCaption: {
    marginTop: 3,
    fontSize: 6.5,
    color: "#555555",
    textAlign: "center",
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    lineHeight: 1,
    letterSpacing: -0.4,
    marginBottom: 6,
  },
  title: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#333333",
    marginTop: 5,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 9,
    fontSize: 8.5,
    color: "#333333",
  },
  contactItem: {
    marginRight: 12,
  },
  link: {
    color: "#1a1a1a",
    textDecoration: "none",
  },
  rule: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    marginTop: 13,
  },
  summary: {
    marginTop: 13,
    fontSize: 9.5,
    color: "#1a1a1a",
  },
  skillsRow: {
    marginTop: 6,
    fontSize: 9,
    color: "#333333",
  },
  skillsLabel: {
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginTop: 16,
    marginBottom: 6,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    paddingTop: 6,
  },
  project: {
    marginBottom: 9,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  projectLinks: {
    fontSize: 8,
    color: "#333333",
  },
  projectDescription: {
    marginTop: 2.5,
    fontSize: 9,
    color: "#262626",
  },
  projectStack: {
    marginTop: 2,
    fontSize: 7.5,
    color: "#555555",
  },
  job: {
    marginBottom: 9,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  jobRole: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  jobCompany: {
    fontFamily: "Helvetica",
    color: "#333333",
  },
  jobCompanyLink: {
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textDecoration: "underline",
  },
  jobMeta: {
    fontSize: 8.5,
    color: "#555555",
    textAlign: "right",
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 2.5,
    paddingRight: 6,
  },
  bulletDot: {
    width: 10,
    fontSize: 9.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: "#262626",
  },
  educationSchool: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    lineHeight: 1.3,
    marginBottom: 2,
  },
  compactItem: {
    marginBottom: 9,
    minWidth: 0,
  },
  compactHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    minWidth: 0,
  },
  compactRole: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    lineHeight: 1.3,
    flex: 1,
    minWidth: 0,
    paddingRight: 6,
  },
  compactDetail: {
    fontSize: 8.5,
    lineHeight: 1.3,
    color: "#444444",
    minWidth: 0,
  },
  compactPeriod: {
    fontSize: 8,
    lineHeight: 1.3,
    color: "#666666",
  },
  pubRow: {
    flexDirection: "row",
    marginTop: 2.5,
    minWidth: 0,
  },
})

function ContactItem({
  children,
  href,
}: {
  children: string
  href?: string
}) {
  if (href) {
    return (
      <Link src={href} style={[styles.contactItem, styles.link]}>
        {children}
      </Link>
    )
  }
  return <Text style={styles.contactItem}>{children}</Text>
}

export function ResumePdf({ qrCodeDataUrl }: { qrCodeDataUrl?: string } = {}) {
  return (
    <Document
      title={`${contact.name} — Resume`}
      author={contact.name}
      subject={contact.title}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.title}>{contact.title}</Text>
            <View style={styles.contactRow}>
              <ContactItem>{contact.location}</ContactItem>
              <ContactItem>{contact.phone}</ContactItem>
              <ContactItem href={`mailto:${contact.email}`}>
                {contact.email}
              </ContactItem>
              <ContactItem href={`https://${contact.linkedin}`}>
                {contact.linkedin}
              </ContactItem>
              <ContactItem href={`https://${contact.github}`}>
                {contact.github}
              </ContactItem>
              <ContactItem href={`https://${contact.scheduler}`}>
                {contact.scheduler}
              </ContactItem>
            </View>
          </View>
          {qrCodeDataUrl ? (
            <View style={styles.qrBlock}>
              <Image src={qrCodeDataUrl} style={styles.qr} />
              <Text style={styles.qrCaption}>Scan to visit my site</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.rule} />

        {/* Summary */}
        <Text style={styles.summary}>{contact.summary}</Text>
        <Text style={styles.skillsRow}>
          <Text style={styles.skillsLabel}>Focus areas: </Text>
          {contact.skills.join("  •  ")}
        </Text>

        {/* Experience */}
        <Text style={styles.sectionTitle}>Experience</Text>
        {experience.map((job) => (
          <View key={`${job.company}-${job.period}`} style={styles.job} wrap={false}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobRole}>
                {job.role}
                {job.companyUrl ? (
                  <Text style={styles.jobCompany}>
                    {"  —  "}
                    <Link src={job.companyUrl} style={styles.jobCompanyLink}>
                      {job.company}
                    </Link>
                  </Text>
                ) : (
                  <Text style={styles.jobCompany}>{`  —  ${job.company}`}</Text>
                )}
              </Text>
              <Text style={styles.jobMeta}>
                {job.period}
                {job.location ? `  ·  ${job.location}` : ""}
              </Text>
            </View>
            {job.bullets?.map((bullet, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Selected project */}
        <Text style={styles.sectionTitle}>Selected Project</Text>
        <View style={styles.project} wrap={false}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>{featuredProject.name}</Text>
            <Text style={styles.projectLinks}>
              <Link src={featuredProject.appUrl} style={styles.link}>
                movietable.ai
              </Link>
              {"  ·  "}
              <Link src={featuredProject.sourceUrl} style={styles.link}>
                GitHub source
              </Link>
            </Text>
          </View>
          <Text style={styles.projectDescription}>
            {featuredProject.description}
          </Text>
          <Text style={styles.projectStack}>
            Stack: {featuredProject.stack}
          </Text>
        </View>

        {/* Earlier roles */}
        <Text style={styles.sectionTitle}>Earlier Experience</Text>
        {earlierRoles.map((role) => (
          <View key={`${role.role}-${role.period}`} style={styles.compactItem} wrap={false}>
            <View style={styles.compactHeader}>
              <Text style={styles.compactRole}>{role.role}</Text>
              <Text style={styles.compactPeriod}>{role.period}</Text>
            </View>
            <Text style={styles.compactDetail}>{role.detail}</Text>
          </View>
        ))}

        {/* Education + Publications */}
        <Text style={styles.sectionTitle} minPresenceAhead={50}>Education</Text>
        {education.map((edu) => (
          <View key={edu.school} style={styles.compactItem} wrap={false}>
            <Text style={styles.educationSchool}>{edu.school}</Text>
            <Text style={styles.compactDetail}>{edu.degree}</Text>
            <Text style={styles.compactPeriod}>{edu.period}</Text>
          </View>
        ))}
        <Text style={styles.sectionTitle} minPresenceAhead={30}>Publications</Text>
        {publications.map((pub, i) => (
          <View key={i} style={styles.pubRow} wrap={false}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={[styles.compactDetail, { flex: 1 }]}>{pub}</Text>
          </View>
        ))}
      </Page>
    </Document>
  )
}
