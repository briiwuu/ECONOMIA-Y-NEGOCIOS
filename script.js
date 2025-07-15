document.addEventListener('DOMContentLoaded', () => {
    // Datos de los cursos (tu tabla convertida a un array de objetos)
    const coursesData = [
        { "Ciclo": 1, "Curso": "AMERICAN LITERATURE", "Creditos": 3, "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2024-02" },
        { "Ciclo": 1, "Curso": "CORRIENTES DEL PENSAMIENTO ECONÓMICO", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 1, "Nota": 11, "Vez": 1, "Período": "2023-02" },
        { "Ciclo": 1, "Curso": "ENGLISH I", "Creditos": 0, "Condiciones": "Oblig.", "Pre-requisito": "NIVELACIÓN EN INGLÉS", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 1, "Curso": "GENERAL BIOLOGY", "Creditos": 3, "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 1, "Nota": 11, "Vez": 1, "Período": "2024-02" },
        { "Ciclo": 1, "Curso": "LENGUAJE Y COMUNICACIÓN I", "Creditos": 0, "Condiciones": "Oblig.", "Pre-requisito": "NIVELACIÓN EN LENGUAJE Y COMUNICACIÓN", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 1, "Curso": "MATEMÁTICA", "Creditos": 0, "Condiciones": "Oblig.", "Pre-requisito": "NIVELACIÓN EN MATEMÁTICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 1, "Curso": "NIVELACIÓN EN INGLÉS", "Creditos": 0, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-00" },
        { "Ciclo": 1, "Curso": "NIVELACIÓN EN LENGUAJE Y COMUNICACIÓN", "Creditos": 0, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-00" },
        { "Ciclo": 1, "Curso": "NIVELACIÓN EN MATEMÁTICA", "Creditos": 0, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-00" },
        { "Ciclo": 2, "Curso": "ENGLISH II", "Creditos": 5, "Condiciones": "Oblig.", "Pre-requisito": "ENGLISH I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 2, "Curso": "ENVIRONMENTAL SCIENCES", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GENERAL BIOLOGY", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 2, "Curso": "GENERAL PSYCHOLOGY", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 2, "Curso": "INTERNATIONAL BUSINESS", "Creditos": 4, "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 1, "Nota": 17, "Vez": 1, "Período": "2024-02" },
        { "Ciclo": 2, "Curso": "LENGUAJE Y COMUNICACIÓN II", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "LENGUAJE Y COMUNICACIÓN I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 2, "Curso": "MATEMÁTICA APLICADA", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "MATEMÁTICA", "Cred.req.": 0, "Mención": "", "Aprobración": 1, "Nota": 6, "Vez": 1, "Período": "2024-02" },
        { "Ciclo": 2, "Curso": "PRINCIPIOS DE ECONOMÍA", "Creditos": 3, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-00" },
        { "Ciclo": 2, "Curso": "REALIDAD NACIONAL Y GLOBALIZACIÓN", "Creditos": 3, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-00" },
        { "Ciclo": 3, "Curso": "ECONOMÍA MATEMÁTICA APLICADA I", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "PRINCIPIOS DE ECONOMÍA", "Cred.req.": 0, "Mención": "", "Aprobración": 1, "Nota": 13, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 3, "Curso": "ENGLISH III", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ENGLISH II", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 3, "Curso": "ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "MATEMÁTICA, MATEMÁTICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 3, "Curso": "FUNDAMENTOS CONTABLES Y FINANCIEROS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MATEMÁTICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 3, "Curso": "GESTIÓN DE EMPRESAS", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "ADMINISTRACIÓN PARA LOS NEGOCIOS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 3, "Curso": "MICROECONOMÍA", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "PRINCIPIOS DE ECONOMÍA", "Cred.req.": 0, "Mención": "", "Aprobración": 1, "Nota": 13, "Vez": 1, "Período": "2024-02" },
        { "Ciclo": 3, "Curso": "WORLD HISTORY", "Creditos": 3, "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 1, "Nota": 18, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 4, "Curso": "CONTABILIDAD AVANZADA", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "FUNDAMENTOS CONTABLES Y FINANCIEROS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 4, "Curso": "ENGLISH IV", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ENGLISH III", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 4, "Curso": "ESTADÍSTICA PARA ECONOMISTAS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 4, "Curso": "FRANCÉS I", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 4, "Curso": "MACROECONOMÍA I", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 1, "Nota": 17, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 4, "Curso": "REGULACIÓN ECONÓMICA", "Creditos": 4, "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 1, "Nota": 17, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 4, "Curso": "ÉTICA Y CIUDADANÍA", "Creditos": 3, "Condiciones": "Oblig.", "Pre-requisito": "REALIDAD NACIONAL Y GLOBALIZACIÓN", "Cred.req.": 0, "Mención": "", "Aprobración": 1, "Nota": 16, "Vez": 1, "Período": "2025-01" },
        { "Ciclo": 5, "Curso": "ECONOMETRÍA I", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MACROECONOMÍA I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 5, "Curso": "ENGLISH COMPOSITION I", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "ENGLISH IV", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 5, "Curso": "FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ÉTICA Y CIUDADANÍA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 5, "Curso": "FUNDAMENTOS EN COMPETENCIAS DIGITALES", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 5, "Curso": "MARKETING", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ADMINISTRACIÓN PARA LOS NEGOCIOS", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 5, "Curso": "MATEMÁTICA FINANCIERA", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MATEMÁTICA APLICADA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 5, "Curso": "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 5, "Curso": "PUBLIC SPEAKING", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "BUSINESS LAW I", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "ECONOMETRÍA II", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ECONOMETRÍA I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "ENGLISH COMPOSITION II", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "ENGLISH COMPOSITION I", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "GESTIÓN FINANCIERA I", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MATEMÁTICA FINANCIERA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "INVESTIGACIÓN Y ANÁLISIS DE MERCADO", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MARKETING", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "MACROECONOMÍA Y NEGOCIOS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MICROECONOMÍA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "MARKETING GLOBAL", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "MARKETING", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 6, "Curso": "OPORTUNIDADES DE NEGOCIOS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MARKETING, FUNDAMENTOS CONTABLES Y FINANCIEROS, PRINCIPIOS DE ECONOMÍA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 7, "Curso": "BASES LEGALES", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 7, "Curso": "E-MARKETING FOR BUSINESS", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "INVESTIGACIÓN Y ANÁLISIS DE MERCADO", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 7, "Curso": "ECONOMÍA INTERNACIONAL", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MACROECONOMÍA I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 7, "Curso": "GLOBAL BUSINESS STRATEGY", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "INTERNATIONAL BUSINESS", "Cred.req.": 120, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 7, "Curso": "INTERNATIONAL TRADE I: IMPORTS AND EXPORTS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 7, "Curso": "MÉTODOS DE INVESTIGACIÓN CIENTÍFICA", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA, ESTADÍSTICA PARA ECONOMISTAS", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 7, "Curso": "PERUVIAN ECONOMY", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "PRINCIPIOS DE ECONOMÍA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "BANCA DE NEGOCIOS", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "MATEMÁTICA FINANCIERA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "BASES PARA LA GESTIÓN ESTRATÉGICA DE LA SOSTENIBILIDAD", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 80, "Mención": "ENI-GEST. INTG. SOSTENIBILIDAD", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "COMPORTAMIENTO Y CLIMA ORGANIZACIONAL", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN DE EMPRESAS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "CONTABILIDAD DE GESTIÓN", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "ECONOMIC EVALUATION OF PROJECTS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "GESTIÓN FINANCIERA I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "INTERNATIONAL CURRENT BUSINESS PRACTICES", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "INTERNATIONAL TRADE I: IMPORTS AND EXPORTS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "INTERNATIONAL FINANCE", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "GESTIÓN FINANCIERA I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "INTERNATIONAL TRADE II: LOGISTICS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "INTERNATIONAL TRADE I: IMPORTS AND EXPORTS", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "INVESTIGACIÓN DE MERCADOS INTERNACIONALES", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "MARKETING", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "ITALIANO I", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "MONETARY THEORY", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MACROECONOMÍA I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 8, "Curso": "PORTUGUÉS I", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "DERIVADOS FINANCIEROS", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN FINANCIERA I", "Cred.req.": 0, "Mención": "ENI-FINZS.", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "ECONOMIC POLICY", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MONETARY THEORY", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "GESTIÓN DE EMPRENDIMIENTOS SOCIOAMBIENTALES", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 100, "Mención": "ENI-GEST. INTG. SOSTENIBILIDAD", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "GESTIÓN EMPRESARIAL SOSTENIBLE", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 100, "Mención": "ENI-GEST. INTG. SOSTENIBILIDAD", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "GLOBAL ECONOMY", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "PRINCIPIOS DE ECONOMÍA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "INTERNATIONAL FREIGHT AND INSURANCE", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "INTERNATIONAL CURRENT BUSINESS PRACTICES", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "ITALIANO II", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "ITALIANO I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "NEGOCIACIÓN Y LIDERAZGO COMERCIAL", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN DE EMPRESAS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "OPERACIONES Y LOGÍSTICA", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN DE EMPRESAS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "PORTUGUÉS II", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "PORTUGUÉS I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "RIESGOS FINANCIEROS", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN FINANCIERA I", "Cred.req.": 0, "Mención": "ENI-FINZS.", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "SEMINARIO DE INVESTIGACIÓN EN ECONOMÍA", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MÉTODOS DE INVESTIGACIÓN CIENTÍFICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 9, "Curso": "TEORÍA DE LOS JUEGOS PARA LA TOMA DE DECISIONES", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "ECONOMÍA FINANCIERA", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "MATEMÁTICA FINANCIERA", "Cred.req.": 0, "Mención": "ENI-FINZS.", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "ESTRATEGIAS GERENCIALES", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN DE EMPRESAS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "GERENCIA DE CAPITAL HUMANO", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN DE EMPRESAS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "GESTIÓN DEL SECTOR PÚBLICO Y SOCIEDAD CIVIL PARA EL DESARROLLO SOSTENIBLE", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "", "Cred.req.": 100, "Mención": "ENI-GEST. INTG. SOSTENIBILIDAD", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "INTERNATIONAL BUSINESS CAPSTONE", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "INTERNATIONAL FREIGHT AND INSURANCE", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "INVESTIGACIÓN Y DESARROLLO DE PATENTES", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "MÉTODOS DE INVESTIGACIÓN CIENTÍFICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "LIDERAZGO ORGANIZACIONAL", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "GESTIÓN DE EMPRESAS", "Cred.req.": 0, "Mención": "ENI-SIU IBS", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "MACROECONOMÍA II", "Creditos": "", "Condiciones": "Elect.", "Pre-requisito": "MACROECONOMÍA I", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" },
        { "Ciclo": 10, "Curso": "PROYECTO INTEGRADOR PARA ECONOMISTAS", "Creditos": "", "Condiciones": "Oblig.", "Pre-requisito": "ECONOMETRÍA II, MÉTODOS DE INVESTIGACIÓN CIENTÍFICA", "Cred.req.": 0, "Mención": "", "Aprobración": 0, "Nota": 0, "Vez": 0, "Período": "" }
    ];

    const mallaContainer = document.querySelector('.malla-container');
    let approvedCourses = new Set(); // Conjunto para almacenar los nombres de los cursos aprobados
    let totalCredits = 0; // Para el requisito de créditos acumulados

    // Inicializar el estado de los cursos desde los datos, si "Aprobración" es 1
    coursesData.forEach(course => {
        if (course.Aprobración === 1) {
            approvedCourses.add(course.Curso.toUpperCase());
            // Asegúrate de que los créditos sean números antes de sumar
            totalCredits += parseInt(course.Creditos || 0); 
        }
    });

    // Función para limpiar y renderizar la malla
    function renderMalla() {
        mallaContainer.innerHTML = ''; // Limpiar el contenido actual

        const cycles = {};
        // Agrupar cursos por ciclo
        coursesData.forEach(course => {
            if (!cycles[course.Ciclo]) {
                cycles[course.Ciclo] = [];
            }
            cycles[course.Ciclo].push(course);
        });

        // Ordenar ciclos numéricamente
        Object.keys(cycles).sort((a, b) => a - b).forEach(cycleNumber => {
            const cycleDiv = document.createElement('div');
            cycleDiv.classList.add('ciclo');
            cycleDiv.innerHTML = `<h2>Ciclo ${cycleNumber}</h2>`;

            cycles[cycleNumber].forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('course-card');
                courseCard.dataset.courseName = course.Curso.toUpperCase(); // Almacenar nombre en mayúsculas para comparación
                courseCard.dataset.prerequisites = course['Pre-requisito']; // Almacenar prerequisitos
                courseCard.dataset.creditsRequired = course['Cred.req.'] || 0; // Almacenar créditos requeridos

                const isApproved = approvedCourses.has(course.Curso.toUpperCase());
                let isLocked = false;
                let missingPrerequisites = [];

                // Verificar prerequisitos de cursos específicos
                if (course['Pre-requisito']) {
                    const prerequisites = course['Pre-requisito'].split(',').map(p => p.trim().toUpperCase()).filter(p => p !== ""); // Filtra vacíos
                    missingPrerequisites = prerequisites.filter(p => !approvedCourses.has(p));
                    if (missingPrerequisites.length > 0) {
                        isLocked = true;
                    }
                }

                // Verificar requisito de créditos acumulados
                if (parseInt(course['Cred.req.']) > 0 && totalCredits < parseInt(course['Cred.req.'])) {
                    isLocked = true;
                    // Solo añadir el mensaje si no hay prerequisitos de curso faltantes o si el mensaje no está ya
                    if (missingPrerequisites.length === 0 || !missingPrerequisites.some(p => p.includes("Créditos acumulados"))) {
                        missingPrerequisites.push(`Créditos acumulados: ${course['Cred.req.']} requeridos (${totalCredits} actuales)`);
                    }
                }

                if (isApproved) {
                    courseCard.classList.add('approved');
                } else if (isLocked) {
                    courseCard.classList.add('locked');
                } else {
                    courseCard.classList.add('unlocked'); // Si no está aprobado ni bloqueado, está desbloqueado
                }

                // Determinar si es SIU
                const isSiu = course['Mención'] && course['Mención'].toUpperCase().includes('SIU');

                courseCard.innerHTML = `
                    <div class="betty-icon"></div>
                    <h3>${course.Curso}</h3>
                    <p>Condición: <strong>${course.Condiciones}</strong></p>
                    ${isSiu ? `<p>Es un curso <strong>SIU</strong></p>` : ''}
                    <input type="checkbox" ${isApproved ? 'checked' : ''} ${isLocked ? 'disabled' : ''}>
                    ${isLocked && missingPrerequisites.length > 0 ? `<div class="prerequisites-tooltip">${missingPrerequisites.join(', ')}</div>` : ''}
                `;

                // Añadir evento al checkbox
                const checkbox = courseCard.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', (event) => {
                    const courseName = courseCard.dataset.courseName;
                    const courseCredits = parseInt(course.Creditos || 0);

                    if (event.target.checked) {
                        // Marcar como aprobado
                        if (!isLocked) { // Solo si no está bloqueado
                            approvedCourses.add(courseName);
                            totalCredits += courseCredits;
                        } else {
                            event.target.checked = false; // Desmarcar si no se pudo aprobar
                            // No es necesario alertar aquí, el tooltip ya lo muestra
                        }
                    } else {
                        // Desmarcar como aprobado
                        // Primero, verificar si algún curso posterior depende de este
                        const dependentCourses = coursesData.filter(c =>
                            c['Pre-requisito'].split(',').map(p => p.trim().toUpperCase()).includes(courseName) &&
                            approvedCourses.has(c.Curso.toUpperCase())
                        );

                        if (dependentCourses.length > 0) {
                            alert(`No puedes desaprobar "${course.Curso}" porque es prerequisito de los siguientes cursos ya aprobados: ${dependentCourses.map(d => d.Curso).join(', ')}.`);
                            event.target.checked = true; // Mantener marcado si hay dependencias
                        } else {
                            approvedCourses.delete(courseName);
                            totalCredits -= courseCredits;
                        }
                    }
                    renderMalla(); // Volver a renderizar para actualizar los estados
                });

                // Mostrar tooltip al pasar el mouse (solo para cursos bloqueados)
                if (isLocked) {
                    const tooltip = courseCard.querySelector('.prerequisites-tooltip');
                    courseCard.addEventListener('mouseenter', () => {
                        if (tooltip) tooltip.classList.add('show');
                    });
                    courseCard.addEventListener('mouseleave', () => {
                        if (tooltip) tooltip.classList.remove('show');
                    });
                }
                
                cycleDiv.appendChild(courseCard);
            });
            mallaContainer.appendChild(cycleDiv);
        });
    }

    // Renderizar la malla por primera vez
    renderMalla();
});
