import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import portfolioData from "@/data/portfolio.json";

// 관리자 페이지 - 포트폴리오 데이터 편집 (데모용)
const Admin = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(portfolioData);

    // 데이터 저장 (실제로는 백엔드 API 호출 필요)
    const handleSave = () => {
        // 여기서는 데모이므로 로컬 스토리지에 저장
        localStorage.setItem("portfolioData", JSON.stringify(data));
        toast({
            title: "저장 완료!",
            description: "포트폴리오 데이터가 저장되었습니다.",
        });
    };

    const handlePreview = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate("/")}
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            관리자 모드
                        </h1>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handlePreview}>
                            <Eye className="mr-2 h-4 w-4" />
                            미리보기
                        </Button>
                        <Button onClick={handleSave} className="gradient-hero text-white">
                            <Save className="mr-2 h-4 w-4" />
                            저장
                        </Button>
                    </div>
                </div>

                {/* 안내 메시지 */}
                <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground">
                        💡 <strong>데모 모드:</strong> 이 페이지는 데모용입니다. 실제 데이터 편집을 위해서는
                        <code className="mx-1 px-2 py-1 bg-muted rounded">src/data/portfolio.json</code>
                        파일을 직접 수정하세요.
                    </p>
                </Card>

                {/* Personal Info */}
                <Card className="p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4 text-foreground">개인 정보</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">이름</label>
                            <Input
                                value={data.personal.name}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        personal: { ...data.personal, name: e.target.value },
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">직책</label>
                            <Input
                                value={data.personal.title}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        personal: { ...data.personal, title: e.target.value },
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">캐치프레이즈</label>
                            <Input
                                value={data.personal.catchphrase}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        personal: { ...data.personal, catchphrase: e.target.value },
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">소개</label>
                            <Textarea
                                value={data.personal.bio}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        personal: { ...data.personal, bio: e.target.value },
                                    })
                                }
                                rows={5}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">이메일</label>
                                <Input
                                    type="email"
                                    value={data.personal.email}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            personal: { ...data.personal, email: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">전화번호</label>
                                <Input
                                    value={data.personal.phone}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            personal: { ...data.personal, phone: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">위치</label>
                                <Input
                                    value={data.personal.location}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            personal: { ...data.personal, location: e.target.value },
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Quick Stats */}
                <Card className="p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4 text-foreground">통계</h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            경력: {data.experience.length}개 | 프로젝트: {data.projects.length}개 |
                            수상: {data.awards.length}개 | 자격증: {data.certifications.length}개
                        </p>
                    </div>
                </Card>

                {/* JSON Editor */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 text-foreground">JSON 편집기</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        고급 사용자: 아래에서 JSON을 직접 편집할 수 있습니다.
                    </p>
                    <Textarea
                        value={JSON.stringify(data, null, 2)}
                        onChange={(e) => {
                            try {
                                setData(JSON.parse(e.target.value));
                            } catch (err) {
                                // Invalid JSON - 무시
                            }
                        }}
                        rows={20}
                        className="font-mono text-xs"
                    />
                </Card>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <p>🔒 이 페이지는 로고를 5번 클릭하면 접근할 수 있습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default Admin;

