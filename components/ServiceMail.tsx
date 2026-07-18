import React from 'react'

type Props = {
    name: string;
    phone: string;
    email: string;
    serviceType: string;
    description: string;
}

export default function ServiceMail({name, phone, email, serviceType, description}: Props) {
  const containerStyle: React.CSSProperties = {
    fontFamily: "'IBM Plex Sans Arabic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    backgroundColor: '#F8F4F0',
    padding: '40px 20px',
    width: '100%',
    boxSizing: 'border-box',
    direction: 'rtl',
    textAlign: 'right',
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    border: '2px solid #0A192F',
    boxShadow: '-8px 8px 0px rgba(10, 25, 47, 0.15)', // Shadow shifted for RTL
    borderRadius: '0px',
    overflow: 'hidden',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#0A192F',
    padding: '32px 40px',
    borderBottom: '4px solid #E3A019',
  };

  const logoStyle: React.CSSProperties = {
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    margin: 0,
    lineHeight: '1.2',
  };

  const logoSubStyle: React.CSSProperties = {
    color: '#E3A019',
    fontSize: '12px',
    letterSpacing: '1px',
    marginTop: '6px',
    display: 'block',
    fontWeight: 500,
  };

  const contentStyle: React.CSSProperties = {
    padding: '40px',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#E3A019',
    color: '#0A192F',
    padding: '6px 12px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    borderRadius: '0px',
  };

  const titleStyle: React.CSSProperties = {
    color: '#0A192F',
    fontSize: '22px',
    fontWeight: 700,
    marginTop: 0,
    marginBottom: '16px',
    borderBottom: '2px solid #0A192F',
    paddingBottom: '12px',
  };

  const introTextStyle: React.CSSProperties = {
    color: '#707180',
    fontSize: '14px',
    lineHeight: '1.6',
    marginTop: 0,
    marginBottom: '32px',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '32px',
  };

  const rowStyle: React.CSSProperties = {
    borderBottom: '1px solid #E5E7EB',
  };

  const labelCellStyle: React.CSSProperties = {
    padding: '14px 0',
    color: '#707180',
    fontSize: '13px',
    fontWeight: 700,
    width: '35%',
    verticalAlign: 'top',
    textAlign: 'right',
  };

  const valueCellStyle: React.CSSProperties = {
    padding: '14px 0',
    color: '#1C1C19',
    fontSize: '14px',
    fontWeight: 500,
    width: '65%',
    verticalAlign: 'top',
    textAlign: 'right',
  };

  const linkStyle: React.CSSProperties = {
    color: '#E3A019',
    textDecoration: 'none',
    fontWeight: 600,
    direction: 'ltr',
    display: 'inline-block',
  };

  const descContainerStyle: React.CSSProperties = {
    backgroundColor: '#F8F4F0',
    borderRight: '4px solid #E3A019', // Border on the right for RTL
    padding: '24px',
    marginTop: '32px',
  };

  const descTitleStyle: React.CSSProperties = {
    color: '#0A192F',
    fontSize: '13px',
    fontWeight: 700,
    margin: '0 0 12px 0',
  };

  const descTextStyle: React.CSSProperties = {
    color: '#1C1C19',
    fontSize: '14px',
    lineHeight: '1.6',
    margin: 0,
    whiteSpace: 'pre-wrap',
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#F8F4F0',
    borderTop: '1px solid #E5E7EB',
    padding: '24px 40px',
    textAlign: 'center',
  };

  const footerTextStyle: React.CSSProperties = {
    color: '#707180',
    fontSize: '11px',
    margin: 0,
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={logoStyle}>DEEPINTAJ</h1>
          <span style={logoSubStyle}>الهندسة وإعادة هندسة العمليات</span>
        </div>

        {/* Content */}
        <div style={contentStyle}>
          {serviceType && (
            <span style={badgeStyle}>{serviceType}</span>
          )}
          <h2 style={titleStyle}>إشعار بطلب خدمة جديد</h2>
          <p style={introTextStyle}>
            مرحباً مسؤول النظام، لقد تم تلقي طلب خدمة جديد من عميل عبر البوابة الإلكترونية. تفاصيل الطلب موضحة أدناه:
          </p>

          <table style={tableStyle}>
            <tbody>
              <tr style={rowStyle}>
                <td style={labelCellStyle}>اسم العميل</td>
                <td style={valueCellStyle}>{name || 'غير محدد'}</td>
              </tr>
              <tr style={rowStyle}>
                <td style={labelCellStyle}>البريد الإلكتروني</td>
                <td style={valueCellStyle}>
                  {email ? (
                    <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
                  ) : (
                    'غير محدد'
                  )}
                </td>
              </tr>
              <tr style={rowStyle}>
                <td style={labelCellStyle}>رقم الهاتف</td>
                <td style={valueCellStyle}>
                  {phone ? (
                    <a href={`tel:${phone}`} style={linkStyle}>{phone}</a>
                  ) : (
                    'غير محدد'
                  )}
                </td>
              </tr>
              <tr style={{ ...rowStyle, borderBottom: 'none' }}>
                <td style={labelCellStyle}>نوع الخدمة المطلوبة</td>
                <td style={valueCellStyle}>{serviceType || 'استشارة عامة'}</td>
              </tr>
            </tbody>
          </table>

          {description && (
            <div style={descContainerStyle}>
              <h3 style={descTitleStyle}>وصف المشروع والأهداف</h3>
              <p style={descTextStyle}>{description}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <p style={footerTextStyle}>
            هذا إشعار تلقائي مرسل لمسؤول النظام في ديبنتاج. يرجى عدم الرد على هذه الرسالة مباشرة.
          </p>
          <p style={{ ...footerTextStyle, marginTop: '6px', fontWeight: 500 }}>
            © {new Date().getFullYear()} ديبنتاج. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </div>
  )
}

